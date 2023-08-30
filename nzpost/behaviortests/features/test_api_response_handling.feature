Feature: Response codes vs App Response

  Scenario: Test different response codes of api

  @nzpostapi @nzpost
  Scenario Outline: Post Shop Location API returns error
    Given I am on the NZ Post Code finder landing page
    And stub the post shop locator api response with <StatusCode> for address <Address>
    Then verify the result for status code <StatusCode>
    Examples:
      | Address                                          | StatusCode |
      | 19A Woodland Road, Johnsonville, Wellington 6037 | 404        |
      | 96 Amesbury Drive, Churton Park, Wellington 6037 | 200        |