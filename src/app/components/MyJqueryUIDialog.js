import React from "react";
import $ from 'jquery';

//import $ from 'jquery' pass jquery module default property to $, so that you 
//can use $ as a local variable in your current module. 
//However jquery-ui only supports amd, so when you use import, 
//it will use global jQuery as $ inside and run a function in the constructor 
//of the module (you can look into its source code).
//
//https://stackoverflow.com/questions/38417328/import-jquery-ui-and-jquery-with-npm-install
//
window.jQuery = $
// Don't use jquery-ui 1.12.  use 1.10
import 'jquery-ui';

export class MyJqueryUIDialog extends React.Component {
     componentDidMount() {
         jQuery( "#dialog" ).dialog();
     }
    render() {
        return (
            <div id="dialog" title="Basic dialog">
                <p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the 'x' icon.</p>
            </div>
        );
    }
}