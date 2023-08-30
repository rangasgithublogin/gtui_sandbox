## Automating Non-Guidewire apps
- This is an example of automating any web apps need not be GW.
- Also, includes API testing where one can stub responses and test all GUI/API integration scenarios independently
- Refer nzpost/behaviortests/features/test_api_response_handling.feature for API testing
    - npm run gt-ui-tests -- "--feature=nzpost/behaviortests/features/*.feature" --glue=nzpost/behaviortests/steps/*.js --cucumberTags="@nzpostapi"  --debug-mode  
- One can also write API only tests