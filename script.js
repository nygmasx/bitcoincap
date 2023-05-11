const url = "https://blockchain.info/ticker";
function ajaxreq() {
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    success: (data) => {
      console.log(data);
      $(".cardz h2").text(data.EUR.last + " EUR");
    },
  });
}
setInterval(ajaxreq, 5000);
