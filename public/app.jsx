//為何要切成一個一個component的原因是要讓這些事情變得稍微易讀且好看些

//顯示在頁面上的字的component，不參與user event喔，所以他是個prsentation component
var GreeterMessage = React.createClass({
    render: function() { 
      //要放在render method裡面因為這邊是object結構，
      //這邊在傳遞props，注意container元件Greeter裡面的<GreeterMessage name={name} message={message}/>
      var name = this.props.name;
      var message = this.props.message;
      return (
         <div>
           <h1>Hello {name}!</h1>
           <p>{message}</p>
         </div>
      );
    }//讓我們要印出的東西去對應到想要傳遞過來的props啦
});

//form的component
var GreeterForm = React.createClass({
    onFormSubmit: function(e){
      e.preventDefault();//預防預設的動作，也就是browser重整
     
      var updates = {};//更新user輸入的值所使用的object

      var name = this.refs.name.value;//從下面<input type="text" ref="name" />傳遞props
      var message = this.refs.message.value;
      if (name.length > 0){//如果我們輸入的字串大於0
        this.refs.name.value = '';//刷新讓輸入框變回0
        updates.name = name;  
      }
      
      if(message.length > 0){//如果我們輸入的字串大於0
        this.refs.message.value = '';//刷新讓輸入框變回0
        updates.message = message;//更新user輸入的值，藉由定義updates object的property
      }

       //接收到此元件的props並觸動事件，且使用這邊的locoal變數name也就是將經過input傳遞過來的字串
        this.props.onNewData(updates);//將改變的值傳遞去Greeter componert
    },
    render: function(){
       return (
        <form onSubmit={this.onFormSubmit}>
            <div>
              <input type="text" ref="name" placeholder="輸入姓名"/>
            </div>

            <div>
              <textarea ref="message" placeholder="輸入留言"></textarea>
            </div>
            
            <div>
               <button>提交資料</button>
            </div>
            
          </form>
       );
    }
});



var Greeter = React.createClass({

//預設props值
 getDefaultProps: function(){
      return {
          name: '請輸入姓名',
          message: '請輸入留言'
      };
    },

//設定元件內的state狀態 
  getInitialState: function(){
    return {
        name: this.props.name,//將name的state 設為等於屬性名的value，透過props傳過來也就是字串Paul
        message: this.props.message  
  };
  },

 //點擊事件區塊
      handleNewData: function(updates){
         this.setState(updates);
           //讓這個property等於此function的參數name也就是user輸入的值
           //，是經過另外一個component更新的
           //而這個method將會更新state，讓render出去的東西跟著改變
      },

//render出去的
  render: function(){
    var name = this.state.name;//fetch上面的state值
    var message = this.state.message;//一定要記得使用this.props.屬性名
     return (
        <div>
          <GreeterMessage name={name} message = {message}/>  
          <GreeterForm onNewData={this.handleNewData} />
        </div>
      );
    }
    //<GreeterMessage name={name} message = {message}/> 會將值props回去對應的component
    //這邊的變數name會對應到this.state.name
    //而這邊的state則會先對應到<Greeter name={firstName} message={messageForEmployee} />的props
    //也就是Paul，上找一下會找到，在getInitialStates裡面
    //接著<GreeterForm onNewName={this.handleNewName} />將onNewName這個屬性props至GreeterForm component
    //然後onNewName屬性的值為handleNewName這個function也就是說，一開始等價於Greeter的屬性name的value
    //接著我們可以看到GreeterForm這個component內會因為user輸入的值而改變handleNewName 的setState來進行更新
    //而一旦handleNewName中的state更新了，那麼render 名字出去的也將會被更新
});


var firstName = 'Paul';
var messageForUser = "hi user"
var messageForEmployee = "howdy punk"


ReactDOM.render(
  <Greeter name={firstName} message={messageForEmployee} />,
  document.getElementById('app')
);


/*記得寫使用流程啦，這整個設計思考捏*/
//presentation component 簡單地負責接收或處理props以及render東西
//Greeter component是典型的container component
//一個重要觀念，state是可以被動態更新的，但props不行