import {OrderedMap} from 'immutable'

const users = OrderedMap({
    '1': {_id: '1', name: "David", created: new Date()},
    '2': {_id: '2', name: "Crismary", created: new Date()},
    '3': {_id: '3', name: "Bruno", created: new Date()}
})
export default class Store{
    constructor(appComponent){
        this.app      = appComponent
        this.messages = OrderedMap()
        this.channels = OrderedMap()
        this.activeChannelId = null
        this.user     = {
            _id: 0,
            name: 'Tom',
            created: new Date(),
        }
    }


    setActiveChannel(id){
        this.activeChannelId = id
        this.update()
    }
    getActiveChannel(){
        const channel = this.activeChannelId ? this.channels.get(this.activeChannelId) : this.channels.first()
        return channel 
    }

    getMessagesFromChannel(channel){
        const messages = []
        if(channel)
        {
            channel.messages.map((val, key) => {
                const message = this.messages.get(key)
                messages.push(message)
            })
        }
        return messages
    }

    getMembersFromChannel(channel){
        const members = []
        if(channel)
        {
            channel.members.map((val, key) => {
                const member = users.get(key)
                members.push(member)
            })
        }
        return members
    }

    addMessage(index, message = {}){
        this.messages = this.messages.set(`${index}`, message)

        this.update()
    }

    getMessages(){
        return this.messages.valueSeq()
    }

    addChannel(index, channel = {}){
        this.channels = this.channels.set(`${index}`, channel)
    }

    getChannels(){
        return this.channels.valueSeq()
    }

    update(){
        this.app.forceUpdate()
    }
}