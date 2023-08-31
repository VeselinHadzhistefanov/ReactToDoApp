import React, {Component} from 'react';

export class TodoBanner extends Component {

    render = () =>
        <div>
            <h4 className="bg-primary text-white text-center p-2">
                {this.props.name} To Do List for
                the {this.props.date}
                ({this.props.tasks.filter(t => !t.done).length} items to do)
            </h4>
        </div>

}