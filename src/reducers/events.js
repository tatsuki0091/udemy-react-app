import { READ_EVENTS, DELETE_EVENT } from '../actions'
import _ from 'lodash'

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}