const contentNode = document.getElementById('contents');

// To start with, we'll replace the Hello World with a simple class.
class IssueList extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the issue list.</div>
        )
    }
}

ReactDOM.render(<IssueList />, contentNode); // Render the component inside the content Node