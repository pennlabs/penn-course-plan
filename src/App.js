import React, {Component} from 'react';
import './styles/App.css';
import 'bulma/css/bulma.css'
import Sections from "./components/selector/Sections";
import Schedule from './components/schedule/Schedule'

class ScheduleModifier {
    // a class that provides methods for broadcasting and receiving changes to a schedule
    constructor(scheduleId) {
        this.onAddListeners = [];
        this.onRemListeners = [];
        let schedules = JSON.parse(localStorage.getItem("schedules"));
        if(schedules === undefined || schedules === null) {
            this.schedule = {term: "2019A", meetings: [], colorPalette: [], LocAdded: false};
            schedules = [this.schedule];
        }else {
            this.schedule = schedules[scheduleId];
        }

        this.save = function(){
          localStorage.setItem("schedules", JSON.stringify(schedules));
        };
        this.save = this.save.bind(this);

        this.addSchedItem = this.addSchedItem.bind(this);
        this.removeSchedItem = this.removeSchedItem.bind(this);
    }

    addSchedItem(item) {
        this.schedule.meetings.push(item);
        this.schedule.colorPalette.push("black");
        this.onAddListeners.forEach(function (listener) {
            listener(item);
        });
        this.save();
    }

    removeSchedItem(item) {
        let index = -1;
        for(let i = 0; i < this.schedule.meetings.length; i++){
            const meeting = this.schedule.meetings[i];
            if(meeting.idDashed === item.idDashed){
                index = i;
                break;
            }
        }
        this.schedule.meetings.splice(index, 1);
        this.schedule.colorPalette.splice(index, 1);
        this.onRemListeners.forEach(function (listener) {
            listener(item);
        });
        this.save();
    }

}

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const scheduleModifier = new ScheduleModifier(this.props.scheduleSelected);
        return (
            <div className="App">
                <div className="columns">
                    <div className="column is-one-fifth">
                    </div>
                    <div className="column is-one-fifth">
                        <Sections scheduleModifier={scheduleModifier}/>
                    </div>
                    <div id="InfoPanel" className="column">
                        <div id="SchedGraph" className="box">
                            <div id="Schedule" style={{position: 'relative'}}>
                                <Schedule scheduleModifier={scheduleModifier}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
