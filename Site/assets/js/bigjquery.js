/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
       $(document).ready( function() {

        $( '#cd-dropdown' ).dropdown({
        stack : false
        });
        $( '#type' ).dropdown({
        stack : false
        });
        $( '#sort' ).dropdown({
        stack : false
        });

    });
    $(".collapse").collapse();

    $('.sortable').sortable();

