import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import $ from 'jquery';
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};
export default class MyRadioButton2 extends React.Component {

  handleOnChange = (event, value) => {
    console.log("handleOnChange:" + value);
  };
  render() {
    return (
      <div>
        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={this.handleOnChange}>
          <RadioButton
            value="light"
            label="Simple"
            style={styles.radioButton}
          />
          <RadioButton
            value="not_light"
            label="Selected by default"
            style={styles.radioButton}
          />
        </RadioButtonGroup>
      </div>
    );
  }
}