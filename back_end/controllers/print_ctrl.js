/**
 * Created by souzaalves on 11/05/16.
 */

function print_ctrl(model){
    console.log('print controller ready!');
    console.dir(model);

    return {print_ctrl,model};
}

module.exports = print_ctrl;

