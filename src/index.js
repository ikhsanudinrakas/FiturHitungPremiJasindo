// Importing BrowserWindow from Main
import BrowserWindow from '../main.js';
  
var options = {
    silent: false,
    printBackground: true,
    color: true,
    margin: {
        marginType: 'printableArea'
    },
    landscape: false,
    pagesPerSheet: 1,
    collate: false,
    copies: 1,
    header: 'Header of the Page',
    footer: 'Footer of the Page'
}
  
function print()
{
    let win = BrowserWindow.getFocusedWindow();
    // let win = BrowserWindow.getAllWindows()[0];
  
    win.webContents.print(options, (success, failureReason) => {
        if (!success) console.log(failureReason);
  
        console.log('Print Initiated');
    });
}