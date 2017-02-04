import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case 'all':
            return todos
        case 'completed':
            return todos.filter(todo => todo.completed)
        case 'active':
            return todos.filter(todo => !todo.completed)
        default:
            return todos
    }
}

const mapStateToProps = (state, { params }) => {
    return {
        todos: getVisibleTodos(state.todos, params.filter || 'all')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList))

export default VisibleTodoList;