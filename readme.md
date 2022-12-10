# Home Assistant push button

This is test, how to make a custom UI to make a home assistant switch behave like a push button. (Non toggeling)
An IHC button can be represented directly in HA and have the same functionallity as the physical button. Manually create a switch from the IHC resource id of a IHC button, than change the UI - see below.

Note: there is no design or fancy costomization here - this is just for testing to verify if this will actually work.

You can install it using hacs or just copy the js file manually in the dist folder. Remember to add the js file to your lovelace resources. You find it in configuration|Lovelave Daskboards - and choose "Resources" in the top.

This is the url if you are using hacs:
~~~
/hacsfiles/ha-pushbutton/pushbutton.js
~~~
Set resource type to "Javascript module".

To insert the entity row in lovelace, you must choose "Show code editor" in the entity card configuration in lovelace. Then insert it like this:
~~~
-   type: 'custom:test-push-button'
-   entity: switch.nameofyourswitch
    name: Test push button
~~~

