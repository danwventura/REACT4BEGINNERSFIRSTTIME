import React from "react";

class EditFishForm extends React.Component{
	handleChange = event => {
		//update that fish
		//1. take a copy of the current fish 
		console.log(event.currentTarget.value);
		const updatedFish = {...this.props.fish,
			[event.currentTarget.name]: event.currentTarget.value};
			this.props.updateFish(this.props.index,updatedFish);
	};
	render(){
		return (
			<div className="fish-edit">
				<input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name}/>
				<input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price}/>
				<select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
						<option value="available">Fresh!</option>
						<option value="unavailable">SOLD OUT</option>
				</select>
				<textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}></textarea>
				<input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image}/>
			</div>
		)
	}
}

export default EditFishForm;