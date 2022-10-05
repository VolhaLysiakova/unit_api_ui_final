@all
@mainpage
Feature: Main page Arena

    Background: 
        Given the User opens "Home" page via url
            
    @free_acc_foa_game
    Scenario: the User with Free account can't play FOA Rated games'
        When the User logs in with "Free" account
        And the User clicks on "FOA Rated" button on "Home" page 
        Then the User sees "Upgrade now" button on "Home" page with "Upgrade now" inner text
        And the User sees "Upgrade to Pro" label on "Home" page with "Oops. To play rated or FOA Rated games, please upgrade to a World Chess Pro account" inner text

    @invite_friend_button
    Scenario: the User is able to invite a friend to play only a Rated and Non-rated game, but not FOA Rated game'
        When the User clicks on "FOA Rated" button on "Home" page 
        Then the User sees that "Invite a friend" button is "disabled" on "Home" page
        When the User clicks on "Rated" button on "Home" page 
        Then the User sees that "Invite a friend" button is "enabled" on "Home" page
        When the User clicks on "Non-rated" button on "Home" page 
        Then the User sees that "Invite a friend" button is "enabled" on "Home" page
    
    @upgrade_free_acc_from_homepage
    Scenario: the User is able to upgrade Free account from Homepage'
        When the User clicks on "FOA Rated" button on "Home" page
        And the User clicks on "Upgrade now" button on "Home" page 
        Then the User sees "New Pro account" label on "Home" page with "New Pro account" inner text

    @open_lobby
    Scenario: the User is able to go to lobby from the Home page'
        When the User clicks on "Lobby" button on "Home" page
        Then the User is redirected to "Lobby" page 
        Then the User sees "Lobby header" label on "Lobby" page with "Click to start a game" inner text

    @board_color
    Scenario: the User is able to change board color on the Home page'
        When the User clicks on "Appearance" button on "Home" page
        And the User clicks on "Textbook" button on "Home" page
        And the User clicks on "Done" button on "Home" page
        Then the User sees board with "Textbook" color on "Home" page
        When the User clicks on "Appearance" button on "Home" page
        And the User clicks on "Standard" button on "Home" page
        And the User clicks on "Done" button on "Home" page
        Then the User sees board with "Standard" color on "Home" page
        When the User clicks on "Appearance" button on "Home" page
        And the User clicks on "World Chess" button on "Home" page
        And the User clicks on "Done" button on "Home" page
        Then the User sees board with "World Chess" color on "Home" page

    @open_tournaments_page
    Scenario: the User is able to go to tournaments page from the Home page'
        When the User clicks on "Tournaments today" button on "Home" page
        Then the User is redirected to "Tournaments" page 
        Then the User sees "Tournaments header" label on "Tournaments" page with "World Chess Tournaments today" inner text

    @best_today
    Scenario: the User is able to see Best today player on the Home page and go to his profile'
        When the User sees "Best today" player on the "Home" page
        And the User clicks on "Best today" button on "Home" page
        Then the User sees the profile of "Best today" player