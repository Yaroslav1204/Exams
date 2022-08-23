document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    var elems1 = document.querySelectorAll('.autocomplete');
    var instances1 = M.Autocomplete.init(elems1, {});

    var elems2 = document.querySelectorAll('.autocomplete1');
    var instances2 = M.Autocomplete.init(elems2, {});

    var elems3 = document.querySelectorAll('.autocomplete2');
    var instances3 = M.Autocomplete.init(elems3, {});

    var elems4 = document.querySelectorAll('select');
    var instances4 = M.FormSelect.init(elems4, {});
  });

  $(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });