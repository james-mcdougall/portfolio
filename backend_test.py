import requests
import sys
from datetime import datetime

class PortfolioAPITester:
    def __init__(self, base_url="http://localhost:8001"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, expected_keys=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, headers=headers, timeout=10)

            success = response.status_code == expected_status
            
            if success:
                try:
                    response_data = response.json()
                    print(f"✅ Passed - Status: {response.status_code}")
                    
                    # Check for expected keys if provided
                    if expected_keys:
                        for key in expected_keys:
                            if key not in response_data:
                                success = False
                                print(f"❌ Missing expected key: {key}")
                                break
                        if success:
                            print(f"   All expected keys present: {expected_keys}")
                    
                    if success:
                        self.tests_passed += 1
                        return True, response_data
                    else:
                        self.failed_tests.append(f"{name} - Missing keys")
                        return False, {}
                        
                except Exception as json_error:
                    print(f"❌ Failed - Invalid JSON response: {str(json_error)}")
                    self.failed_tests.append(f"{name} - Invalid JSON")
                    return False, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                self.failed_tests.append(f"{name} - Status {response.status_code}")
                return False, {}

        except requests.exceptions.RequestException as e:
            print(f"❌ Failed - Request Error: {str(e)}")
            self.failed_tests.append(f"{name} - Request Error")
            return False, {}

    def test_health_endpoint(self):
        """Test health check endpoint"""
        return self.run_test(
            "Health Check",
            "GET",
            "api/health",
            200,
            expected_keys=["status", "message"]
        )

    def test_profile_endpoint(self):
        """Test profile endpoint"""
        return self.run_test(
            "Profile Data",
            "GET", 
            "api/profile",
            200,
            expected_keys=["name", "title", "email", "github", "linkedin"]
        )

    def test_projects_list(self):
        """Test projects list endpoint"""
        success, response = self.run_test(
            "Projects List",
            "GET",
            "api/projects", 
            200
        )
        
        if success:
            if isinstance(response, list) and len(response) == 5:
                print(f"   ✅ Correct number of projects: {len(response)}")
                # Check first project structure
                if response and all(key in response[0] for key in ["id", "title", "category", "description"]):
                    print(f"   ✅ Project structure is correct")
                    return True, response
                else:
                    print(f"   ❌ Project structure missing required keys")
                    self.failed_tests.append("Projects List - Invalid structure")
                    return False, {}
            else:
                print(f"   ❌ Expected 5 projects, got {len(response) if isinstance(response, list) else 'non-list'}")
                self.failed_tests.append("Projects List - Wrong count")
                return False, {}
        return False, {}

    def test_project_detail(self, project_id):
        """Test individual project detail endpoint"""
        success, response = self.run_test(
            f"Project {project_id} Detail",
            "GET",
            f"api/projects/{project_id}",
            200,
            expected_keys=["id", "title", "description", "technologies", "features"]
        )
        return success, response

    def test_invalid_project(self):
        """Test invalid project ID"""
        success, response = self.run_test(
            "Invalid Project ID",
            "GET",
            "api/projects/999",
            200  # API returns 200 with error message
        )
        
        if success and "error" in response:
            print(f"   ✅ Correctly handles invalid project ID")
            return True, response
        else:
            print(f"   ❌ Should return error for invalid project ID")
            self.failed_tests.append("Invalid Project - No error handling")
            return False, {}

def main():
    print("🚀 Starting Portfolio API Tests...")
    print("=" * 50)
    
    # Setup
    tester = PortfolioAPITester()
    
    # Test health endpoint
    health_success, _ = tester.test_health_endpoint()
    if not health_success:
        print("❌ Health check failed - API may not be running")
        print(f"\n📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
        return 1

    # Test profile endpoint
    tester.test_profile_endpoint()
    
    # Test projects list
    projects_success, projects_data = tester.test_projects_list()
    
    # Test individual project details (test first 3 projects)
    if projects_success:
        for i in range(1, 4):
            tester.test_project_detail(i)
    
    # Test invalid project
    tester.test_invalid_project()
    
    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.failed_tests:
        print(f"\n❌ Failed Tests:")
        for failed_test in tester.failed_tests:
            print(f"   - {failed_test}")
    else:
        print(f"\n🎉 All tests passed!")
    
    success_rate = (tester.tests_passed / tester.tests_run) * 100 if tester.tests_run > 0 else 0
    print(f"📈 Success Rate: {success_rate:.1f}%")
    
    return 0 if success_rate >= 80 else 1

if __name__ == "__main__":
    sys.exit(main())