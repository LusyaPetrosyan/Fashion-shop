import {Menu} from "semantic-ui-react";

function Header() {
  return(
         <div>
        <Menu stackable>
          <Menu.Item name="home" active={true} />
          <Menu.Item name="products" active={false} />
          <Menu.Item name="review" active={false} />
          <Menu.Menu position="right">
            <Menu.Item name="log in" active={false} />
          </Menu.Menu>
        </Menu>


        <Media at="mobile">
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Media>

        <Media greaterThan="mobile">
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Media>
      </div>
    );
  }
}

      </div>
)}

export default Header;