// crunchyroll mock for testing

//This is a partner_bridge mock
 
// An internal token retrieved from partner sites.
// It's normally passed around and its internal data
// is not used by the React Application.
class Token {
    constructor(){
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", "http://google.com", false);
      xmlHttp.send(null);
      this._token = xmlHttp.responseText;
    }
    getSize(){
      return this._token.size;
    }
  }
   
  // This the an abstract interface for interacting with platform
  // specific methods and settings.
  // he asked me to look over and explain what parts of this code, this mocked function, that would be used in a real scenerio to talk to the the client device this is used on such as a smart tv, would do at each point
  class partner_bridge {
    //This initialization is just for mocking purposes.
    constructor(){
      this.__initted = false;
      this._tokens = new Set(); // value is the key 
      this._handlers = [];
      this._tokens_size_total = 0;
      this._platform_event_handler = null;
    }
   
    //init is called by the React application to tell the
    //platform specific system it is ready to be used.
    init(complete){
        // I brought up how in a real situation I wouldn't use setTimeouts because you never know how long a users device will actually take I suggested async/awaits in a try/catch, but since this is a mock he stopped me and said why would you want to use the setTimeout here, and I answered because this isn't awaiting anything from an external source, we want this to run within a unit test of our own making so we have to prompt it to run with a timeout to create the illusion of the real timing situation
      setTimeout(()=>{
        this.__initted = true; // js vs typescript, syntax errors get past in js
        complete(true); // he asked when this would run before or after the next parts and I said it'd take a second then move on in the call stack but he told me that wasn't true, I should look into how it would do this in TS verus JS I was confused about it.
      }, 1000)
      f = ()=>{
        if (this._platform_event_handler.size){
          this._platform_event_handler("event";)
        }
      }
      setInterval(()=>{
        f()
        setInterval(f, 1000+Math.floor(Math.random()*9000))
      }, 1000)
    } // lets say runTime 2s
   
    //This is a convenience function for use in the app
    //to check if the platform has finished initting.
    is_inited(){
      return this.__initted;
    }
   
    //This is a platform specific functon that
    //allows the app to exit.
    exit_app(){
        // spoke about what magic_device_api would possibly contain I said information about the device this application is running on, perhaps other apps that are open, and if the user clicked stop/close on their remote, but I don't think I said device events
      magic_device_api.exit_app()
    }
   
    //Used by the Rect app to get a billing token.
    // I talked about how this billing token would be necessary to possibily allow users to pay through the app, creating a secure token for each session so we don't save their cc info after the billing process completes
    get_billing_token(){
      if (this.__initted != true)
        console.error("You must init first!");
        throw new Error("You must init first!");
      tok = new token();
      this._tokens.push(tok);
      this._tokens_size_total += tok.getSize();
      return tok;
    }
   
    //When the app is done, it shoudl release the token.
    release_billing_token(tok){
      if (! this._tokens has tok){
        console.error("Token not found!");
        throw new Error("Token not found!");
      }
      // talked about why this code was grayed out, he said his wasn't but I spoke to how this code maybe wouldn't have been run because it's grayed out, and it's not returned. but it would just fall through after the if statement, after that we spoke about this._tokens has tok, which I thought would need underscores but has is an operator in typescript so I messed up there. 
      this._tokens_size_total -= tok.getSize();
      this._tokens.delete(tok);
    }
   
    //Gets platform specific keybindings.
    // didn't talk through this
    // in hindsight I dunno what I would have said, perhaps that these are pixels to move when the user presses these buttons on their tv remote? or do the numbers correspond to html entities like an up arrow ^ ? maybe the numbers are certain events in the magic_device_api to run certain functions on press
    get_partner_keymap(){
      return {
        "up": 38,
        "down": 40,
        "left": 37,
        "right": 39,
        "back": 27,
        "select": 13,
        "play_pause": 179
      }
    }
   
    //Returns a platform estimate of memory used by the app.
    // didn't talk through this specifically, but I remember bringing it up from the above constructor, mentioning the way it's called size total, there must be a ton of tokens coming through, perhaps from other third parties or events happening on the client, then we got to the billing token part so that made more sense
    get_platform_memory() {
      return this._tokens_size_total;
    }
   
    //This returns platform specific callback for
    //events generated by the platform.
    // didn't talk through this
    set_on_platform_event(callback) {
      this._platform_event_handler = callback;
    }
   
    //This is a test method that ca be used to ensure
    //the app will behave normally if the system is at
    //an elevated temperature.
    // didn't talk through this but I saw runtime and thought of maybe using it for the ask in call each method once function that he asked me to write but he steered me away from doing that, probably wanted to see me actually write something, which I fumbled through for sure
    temperature_test(run_time_seconds, callback){
      magic_partner_api.execute_temperature_test(run_time_seconds, callback)
    }
  }
  
  
  class test_partner_bridge {
    call_each_method_once() {
    // inside here is what I wrote in, fail on syntax for sure, started with making pb and calling the methods like pb.init
      const pb = new partner_bridge();
      // he asked how I could calculate the amount in seconds that running each method would take
      // set the time format some how? assume it's seconds?
      const startTime = new timestamp;
      const runTime;
      const complete = b => {
        let a = false;
        returns b;
      }
      // at first I wrote this init function without a parameter, then we discussed what the complete function should do, becase it's setting to true inside, but in hindsight after the interview now I think complete would have run pb.is_inited() to set that 
      pb.init(complete()); 
      console.log(pb.is_inited(), runTime)
      // what I didn't do but dreamt about the night after was why I didn't log out the actual versus expected like a real unit test would
      if (pb.is_inited != true) {
        Error('fail test, is_inited not true', runTime);
      }
      pb.is_inited();
      pb.exit_app();
      pb.get_billing_token();
      // total time for all methods called
      const endTime = new timestamp;
      runTime = endTime - startTime
      // console.log()
      return runTime;
    }
  }
  