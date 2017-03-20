import React from 'react';

class AdminPage extends React.Component {

    constructor(props) {

        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.updateData = this.updateData.bind(this);

        this.state = {model: {}, data: []};
        this.createModelObj();

    }

    componentDidMount() {
        this.props.getData(this.updateData);
    }

    createModelObj() {

        this.props.model.map((field) =>
            this.state.model[field] = ''
        );
    }

    handleChange(event) {

        const field = event.target.name;
        const value = event.target.value;

        this.setState(() => this.state.model[field] = value);

    }

    updateData(data) {
        this.setState({data: data});
    }

    mapData() {

        return this.state.data.map((item, index) =>
            React.createElement(
                this.props.itemView,
                {key: index, model: item}
            )
        );

    }

    mapFormInputs() {

        return this.props.model.map((field, index) =>
            <div className="row">
                <input key={index} name={field} type="text"
                       className="form-control"
                       value={this.state.model[field]} placeholder={field}
                       onChange={this.handleChange} />
            </div>
        );
    }

    render() {

        return (
            <div>
                <div className="col-sm-4">
                    <div>{this.mapData()}</div>
                </div>
                <div className="col-sm-8">
                    <div className="col-sm-6 col-sm-offset-3">
                        <form>
                            <div className="form-group">
                                {this.mapFormInputs()}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPage;