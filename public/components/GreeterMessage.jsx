var React = require('react');

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

module.exports = GreeterMessage;