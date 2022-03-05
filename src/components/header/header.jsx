import "./header.scss";
import { ReactComponent as Logo } from "../../assets/circle.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDrop from "../cart-component/cart-component";

import { createStructuredSelector } from "reselect";
import { SelectCartHidden } from "../../redux/cart/cart.selectors";
import { CurUser } from "../../redux/user/user.selector";

import {
  OptinLink,
  OptionContainer,
  LogoContainer,
  HeaderContainer,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionContainer>
      <OptinLink to="/shop">SHOP</OptinLink>

      {currentUser ? (
        <OptinLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptinLink>
      ) : (
        <OptinLink to="/sign">SIGN IN</OptinLink>
      )}
      <CartIcon />
    </OptionContainer>
    {hidden ? null : <CartDrop />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: CurUser,
  hidden: SelectCartHidden,
});

export default connect(mapStateToProps)(Header);
