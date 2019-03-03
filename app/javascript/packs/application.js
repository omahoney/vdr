/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import './stylesheets.scss';
import './images.js';
import 'jquery';
import 'jquery-ujs';
import 'bootstrap/dist/js/bootstrap';
//import 'bootstrap';
import Rails from 'rails-ujs';
import Turbolinks from 'turbolinks';
import ActiveStorage from 'activestorage';
// Load Datatables
/* require('datatables.net-bs')(window, $)
require('datatables.net-buttons-bs4')(window, $)
require('datatables.net-buttons/js/buttons.colVis.js')(window, $)
require('datatables.net-buttons/js/buttons.html5.js')(window, $)
require('datatables.net-buttons/js/buttons.print.js')(window, $)
require('datatables.net-responsive-bs')(window, $)
require('datatables.net-select')(window, $) */
import 'datatables.net/js/jquery.dataTables';
import 'datatables.net-bs4/js/dataTables.bootstrap4';
import 'datatables.net-bs4';
import 'datatables.net-buttons-bs4';
import 'datatables.net-buttons/js/buttons.colVis.js';
import 'datatables.net-buttons/js/buttons.html5.js';
import 'datatables.net-buttons/js/buttons.print.js';
import 'datatables.net-responsive-bs';
import 'datatables.net-select';

Rails.start();
Turbolinks.start();
ActiveStorage.start();

$(document).on('turbolinks:load', function(){
    $("table[role='datatable']").each(function(){
        $(this).DataTable({});
    });
})
