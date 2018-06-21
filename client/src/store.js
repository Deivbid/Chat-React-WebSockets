import {OrderedMap} from 'immutable'
export default class Store{
    constructor(){
        this.messages = OrderedMap();
        this.channels = OrderedMap();

        this.user     = {
            _id: 0,
            name: 'Tom',
            created: new Date(),
        }
    }

    addMessage(index, message = {}){
        this.messages = this.messages.set(index, message)
    }

    getMessages(){
        return this.messages.valueSeq()
    }

    addChannel(index, channel = {}){
        this.channels = this.channels.set(index, channel)
    }

    getChannels(){
        return this.channels.valueSeq
    }
}