Feature: Find NZ Post Code

  @nzpost
  Scenario Outline: For the given address, get the post code
    Given I am on the NZ Post Code finder landing page
    When I enter the address <Address>
    Then verify the result
    Examples:
      | Address                                          |
      | 19A Woodland Road, Johnsonville, Wellington 6037 |
      | 96 Amesbury Drive, Churton Park, Wellington 6037 |