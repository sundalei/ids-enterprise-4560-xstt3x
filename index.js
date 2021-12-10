$(document).ready(function () {
  Soho.Locale.set('en-US');
  $('#example').on('click', function () {
    var fistModal = $('body')
      .message({
        title: '<span>First Dialog</span>',
        showCloseBtn: true,
        message: 'This is first message dialog',
        buttons: [
          {
            text: 'OK',
          },
          {
            text: 'Cancel',
            click: function () {
              console.log('Cancel is clicked.');
              $(this).data('modal').close();
            },
          },
        ],
      })
      .on('close', function () {
        console.log('first dialog closed.');
        fistModal.off('close');

        var secondDialog = $('body')
          .message({
            title: '<span>Second Dialog</span>',
            showCloseBtn: true,
            message: 'This is second dialog',
            buttons: [
              {
                text: 'OK',
              },
            ],
          })
          .on('close', function () {
            console.log('second dialog closed.');
            secondDialog.off('close');
          });
      });
  });
});
