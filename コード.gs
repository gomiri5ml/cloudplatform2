function doGet() {
  var template = 'index';
  return HtmlService.createTemplateFromFile(template).evaluate();
}

function saveTextToSpreadsheet(text) {
  var ss = SpreadsheetApp.openById('YOUR ID'); // スプレッドシートのIDを設定
  var sheet = ss.getSheetByName('シート1'); // 対象のシート名を設定
  sheet.appendRow([text,new Date()]);
}
