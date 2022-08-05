import { FETCH_JOB, SET_JOB, ADD_JOB, DEL_JOB, EDIT_JOB, FIL_JOB, CHECK_JOB, EDIT_ID, REMOVE_JOB, SET_USER, REORDER_DOING, ASSIGN_JOB } from './constants';

const reOrderDoing = payload => ({
    type: REORDER_DOING,
    // new Doing Arr ordered
    newDoing: payload
})
const fetchJob = payload => ({
    type: FETCH_JOB,
    payload
})
const setJob = payload => ({
    type: SET_JOB,
    payload
})

const editJob = ({ id, input }) => ({
    type: EDIT_JOB,
    id,
    input
})
const editId = id => ({
    type: EDIT_ID,
    payload: id,
})

const addJob = payload => ({
    type: ADD_JOB,
    payload
})
const delJob = payload => ({
    type: DEL_JOB,
    payload
})
const checkJob = payload => ({
    type: CHECK_JOB,
    payload
})
const filJob = payload => ({
    type: FIL_JOB,
    payload
})
const removeJob = payload => ({
    type: REMOVE_JOB,
    payload,
})
const setCurUser = payload => ({
    type: SET_USER,
    payload,
})

const assignJob = ({ taskObj, curUser, receiver }) => ({
    type: ASSIGN_JOB,
    sharedTask: taskObj,
    curUser,
    receiver
})

export { fetchJob, setJob, addJob, delJob, editJob, filJob, checkJob, editId, removeJob, setCurUser, reOrderDoing, assignJob };
