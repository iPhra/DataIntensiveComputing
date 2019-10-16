let active;

/*anychart.onDocumentReady(async function() {
  const books = await (await fetch("/apis/words")).json();
    
  let data = [];
  let obj;
  for(let i=0; i<books.length; i++) {
      obj = {"x":books[i].word, "value":books[i].frequency, "category":books[i].tag}
      data.push(obj)
  }

 // create a tag (word) cloud chart
  var chart = anychart.tagCloud(data);

   // set a chart title
  chart.title('Most frequent words per hashtag')
  // set an array of angles at which the words will be laid out
  chart.angles([0])
  // enable a color range
  chart.colorRange(true);
  // set the color range length
  chart.colorRange().length('80%');

  // display the word cloud chart
  chart.container("container");
  chart.draw();
});*/

async function drawChart(tag) {
    if(tag[0]==="#") {
        tag = "%23"+tag.substring(1);
    }
    const words = await (await fetch("/apis/words?tag="+tag)).json();

    let data = [];
    let obj;
    for(let i=0; i<words.length; i++) {
      obj = {"x":words[i].word, "value":words[i].frequency, "category":words[i].date}
      data.push(obj)
    }

    // create a tag (word) cloud chart
    var chart = anychart.tagCloud(data);

    // set a chart title
    chart.title('Most frequent words for hashtag '+active)
    // set an array of angles at which the words will be laid out
    chart.angles([0])
    // enable a color range
    chart.colorRange(true);
    // set the color range length
    chart.colorRange().length('80%');

    // display the word cloud chart
    chart.container("container");
    chart.draw();
}

async function appendTags() {
    const tags = await (await fetch("/apis/tags")).json();
    
    for(let i=0; i<tags.length; i++) {
        $('.list-group').append('<a href="#" id="'+tags[i].tag+'" class="list-group-item list-group-item-action">'+tags[i].tag+'</a>');
    }

    active = tags[0].tag
    await drawChart(active)
}

$(function() {
    $(document).on("click", ".list-group-item", async function() {
        active = this.id;
        $('#container').empty();
        await drawChart(this.id);
    });
});


$(async function() {
    await appendTags();
});