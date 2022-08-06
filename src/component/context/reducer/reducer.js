import { ADD_JOB, CHECK_JOB, DEL_JOB, EDIT_JOB, SET_JOB, EDIT_ID, REMOVE_JOB, FETCH_JOB, SET_USER, REORDER_DOING, ASSIGN_JOB, FIL_JOB, FIL_LIST } from "./constants";
import { getUserObject } from "../../hooks";
import { SetDate } from "../../hooks";




const reducer = (state, action) => {
    const { todos, curUser } = state;
    // func get local data
    const getLocalTodos = () => JSON.parse(window.localStorage.getItem('todos'));

    // func to get current User
    const getCurrentUser = (localArr) => localArr.find(({ userName }) => userName === curUser);

    switch (action.type) {
        case FETCH_JOB:
            return {
                ...state,
                todos: action.payload
            }
        case SET_JOB:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_JOB:
            const newJob = {
                id: Math.floor(Math.random() * 10000) + 1,
                todo: action.payload,
                date: '25/07/2022',
                time: '10:12',
                isCompleted: false,
                isEdit: false,
                isHover: false,
                isRemoved: false,
                isTarget: false,
                addOn: [],
            }
            todos.push(newJob);
            const addLocal = getLocalTodos();
            const addUser = getCurrentUser(addLocal);
            addUser.todos.push(newJob);

            window.localStorage.setItem('todos', JSON.stringify(addLocal));
            return state;
        case CHECK_JOB:
            const checkLocal = getLocalTodos();
            const checkUser = getCurrentUser(checkLocal);
            const checkedArr = todos.map(todo => {
                if (todo.id === action.payload) {

                    todo.isCompleted = true;
                    const isAssigned = todo.assignedTo || false;

                    if (isAssigned) {
                        const assignUser = getUserObject(checkLocal, todo.assignedFrom);
                        const updateArr = assignUser.todos.map(assTask => {
                            if (assTask.id === action.payload) {
                                const date = SetDate();
                                return {
                                    ...assTask,
                                    isCompleted: true,
                                    date
                                }
                            }
                            return assTask;
                        })
                        assignUser.todos = updateArr
                    }
                }
                return todo;
            })

            checkUser.todos = checkedArr;
            console.log(checkLocal);
            window.localStorage.setItem('todos', JSON.stringify(checkLocal));
            return {
                ...state,
                todos: checkedArr,
            }
        case DEL_JOB:
            const deletedTodos = todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.isRemoved = true;
                }
                return todo;
            })
            const delLocal = getLocalTodos();
            const delUser = getCurrentUser(delLocal);

            delUser.todos = deletedTodos;
            window.localStorage.setItem('todos', JSON.stringify(delLocal));

            return {
                ...state,
                todos: deletedTodos
            };
        case EDIT_ID:
            return {
                ...state,
                editedId: action.payload
            }
        case EDIT_JOB:
            const editTodos = todos.map(todo => {
                if (todo.id === action.id) {
                    todo.todo = action.input;
                }
                return todo;
            })
            const editLocal = getLocalTodos();
            const editUser = getCurrentUser(editLocal);

            editUser.todos = editTodos;
            window.localStorage.setItem('todos', JSON.stringify(editLocal));
            return {
                ...state,
                todo: editTodos
            }
        case REMOVE_JOB:
            const unRemove = todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.isRemoved = false;
                }
                return todo;
            });

            const unRemoveLocal = getLocalTodos();
            const unRemoveUser = getCurrentUser(unRemoveLocal);

            unRemoveUser.todos = unRemove;
            window.localStorage.setItem('todos', JSON.stringify(unRemoveLocal));


            return {
                ...state,
                todos: unRemove,
            }
        case SET_USER:
            const user = action.payload;
            return {
                ...state,
                curUser: user
            }
        case FIL_JOB:
            const filInput = action.payload
            return  {
                ...state,
                filInput
            }
        case FIL_LIST : 
            const filterListId =action.payload;
            console.log('Dang nhan duoc id cua cot ', filterListId);
            return {
                ...state,
                filterListId
            }
        case REORDER_DOING:
            const reorderDoing = todos.filter(({ isCompleted, isRemoved }) => isCompleted || isRemoved);
            reorderDoing.push(...action.newDoing);

            const reDoingLocal = getLocalTodos();
            const reDoingUser = getCurrentUser(reDoingLocal);

            reDoingUser.todos = reorderDoing;
            window.localStorage.setItem('todos', JSON.stringify(reDoingLocal));

            return {
                ...state,
                todos: reorderDoing
            }
        case ASSIGN_JOB:
            const { sharedTask, curUser, receiver } = action;
            const assignedTask = {
                ...sharedTask,
                assignedFrom: curUser,
                assignedTo: receiver
            }

            console.log('Assigned Task', assignedTask);

            const assignLocal = getLocalTodos();
            const receiverTodo = getUserObject(assignLocal, receiver);
            receiverTodo.todos.push(assignedTask);

            console.log('ReceiverTodo', receiverTodo);

            const curTodo = getUserObject(assignLocal, curUser);
            const assignTodo = curTodo.todos.map(todo => {
                if (todo.id === sharedTask.id) {
                    return assignedTask
                }
                return todo
            })
            console.log(curTodo);
            console.log('New ', assignTodo);
            curTodo.todos = assignTodo;
            console.log('New local', assignLocal);
            window.localStorage.setItem('todos', JSON.stringify(assignLocal));
            return {
                ...state,
                todos: assignTodo
            }
        default:
            throw new Error('Invalid action');
    }
}




export default reducer;

