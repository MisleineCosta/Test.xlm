import React, { PureComponent } from "react";
import Header from "./Header";
import SearcgInput from "./SearchInput";
import EmojiResults from "./EmojiResults";

class APP extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filteredEmoji: filteredEmoji("Smile", 20)
        };
      }

}
  
handleSearchChange = event => {
    this.setState({
        filteredEmoji: filteredEmoji(event.target.value, 20)
    });
  }

render(); {
    return (
        <div>
            <Header />
            <SearcgInput textChange={this.handleSearchChange} />
        </div>
    )
       
  }
