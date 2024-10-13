export function Header(props) {
    const { todos } = props
    const todosLength = todos.length
    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} open tasks.</h1>
        </header>
    )
}