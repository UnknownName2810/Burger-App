import React, { Component } from "react";
import { connect } from "react-redux";
import addingFoodAction from "../redux/actions/addingFoodAction";
class MenuBurger extends Component {
  renderBurgerMenu = () => {
    let { burger, menu } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <th>{propsMenu}</th>
          <td>
            <button
              className="btn btn-info"
              onClick={() => {
                this.props.addingFood(propsMenu, 1);
              }}
            >
              +
            </button>
            {burger[propsMenu]}
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.addingFood(propsMenu, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center text-success">Your Menu</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Thức Ăn</th>
              <th></th>
              <th>Đơn giá</th>
              <th>Thành Tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderBurgerMenu()}</tbody>
          <tfoot>
            <tr className="text-success">
              <td colSpan={2}></td>
              <td>Tổng Tiền:</td>
              <td>{this.props.total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addingFood: (propsBurger, amount) => {
      dispatch(addingFoodAction(propsBurger, amount));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuBurger);
