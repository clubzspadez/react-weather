var GreeterMessage = React.createClass({
    render: function() {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (name.length > 0) {
            this.refs.name.vale = '';
            updates.name = name;
        }
        if (message.length > 0) {
            this.refs.message.vale = '';
            updates.message = message;
        }
        this.props.onNewData(updates);
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name"/>
                </div>
                <div>
                    <textarea ref="message"></textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
});

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {message: 'This is from a component!'}
    },
    getInitialState: function() {
        return {name: this.props.name, message: this.props.message};
    },
    handleNewData: function(updates) {
        this.setState(updates);
    },
    render: function() {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData}/>

            </div>
        );
    }
});

var name = 'Jonathan';

ReactDOM.render(
    <Greeter name={name}/>, document.getElementById('app'));
