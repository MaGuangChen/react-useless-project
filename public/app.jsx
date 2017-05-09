var Greeter = React.createClass({

//預設props值
 getDefaultProps: function(){
      return {
          name: 'React',
          message: 'hello who are you ?'
      };
    },//預設的props如果我們沒有給予Greeter props name的話，就會印這邊的

//state區塊 
  getInitialState: function(){
    return {
        name: this.props.name//將name的state 設為等於props的value
    };
/*這邊是state的，state不能跟props
一樣用這樣 this.state.name = name;的方式來進行宣告要用this.setState();*/

  },

 //事件區塊
  onButtonClick: function(e){
      e.preventDefault();//不讓預設的submit去跑

      var name = this.refs.name.value;//連結input
      //測試時候用的alert(name);
      //加入state
      this.setState({
          name:name
      });
  },

//render出去的component
  render: function(){
    var name = this.state.name;
    var message = this.props.message;//一定要記得使用this.props.屬性名
    //也可以直接在希望印出的地方使用花括號
     return (
        <div>
          <h1>Hi how are you? {name}</h1>
          <p>{message + '!!!!'}</p>

          <form onSubmit={this.onButtonClick}>

            <input type="text" ref="name" />
            <button>輸入姓名</button>

          </form>

        </div>

      );//onSubmit是個捕捉妳的form submit的method喔
      //ref是referance代表的意思
  }//這是Greeter內的method啦

});

var firstName = 'Paul';
var messageForUser = "hi user"
var messageForEmployee = "howdy punk"
ReactDOM.render(
  <Greeter name={firstName} message={messageForEmployee} />,
  document.getElementById('app')
);



/*var Greeter = React.createClass({
  render: function(){
       return React.createElement (
         'h1',
         null,
         'Hello React.createElement'
      )這個方法也可以，但不好讀且不好維護
  }//這是Greeter內的method啦

});*/

/* props可以傳遞屬性值與一些東西，有點像更新
   state可以更新跟維持，有點像是
*/