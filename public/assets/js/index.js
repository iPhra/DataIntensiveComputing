async function drawChart(tag,date) {
    const words = await (await fetch("/apis/words?tag="+tag+"&date="+date)).json();

    let data = [];
    let obj;
    for(let i=0; i<words.length; i++) {
      obj = {"x":words[i].word, "value":words[i].frequency};
      data.push(obj)
    }

    // create a tag (word) cloud chart
    const chart = anychart.tagCloud(data);

    // set a chart title
    chart.title('Most frequent words for trend "'+tag+'" on '+date);
    // set an array of angles at which the words will be laid out
    chart.angles([0]);

    // display the word cloud chart
    chart.container("container");
    chart.draw();
}

async function appendTags() {
    const tags = await (await fetch("/apis/tags")).json();

    let heading;
    let collapse;
    for(let i=0; i<tags.length; i++) {
        if (tags[i].tag[0]==="#") {
            tags[i].tag = tags[i].tag.substring(1);
        }
        heading = "heading"+tags[i].tag;
        collapse = "collapse"+tags[i].tag;
        $('#accordion').append('<div class="card">' +
            '        <div class="card-header" id="'+heading+'">' +
            '            <h5 class="mb-0">' +
            '                <button class="btn btn-link" data-toggle="collapse" data-target="#'+collapse+'" aria-expanded="false" aria-controls="'+collapse+'">' +
            ''+tags[i].tag+''+
            '                </button>' +
            '            </h5>' +
            '        </div>' +
            '        <div id="'+collapse+'" class="collapse show" aria-labelledby="'+heading+'" data-parent="#accordion">' +
            '            <div class="card-body">' +
            ''+await appendDates(tags[i].tag)+'' +
            '            </div>' +
            '        </div>' +
            '    </div>');
    }

}

async function appendDates(tag) {
    const dates = await (await fetch("/apis/dates?tag="+tag)).json();

    let html = "";
    for(let i=0; i<dates.length; i++) {
        html = html + '<a href="#" id="'+dates[i].date+'" class="list-group-item list-group-item-action">'+dates[i].date+'</a>';
    }

    return html;

}

$(function() {
    $(document).on("click", ".list-group-item", async function() {
        $('#container').empty();
        await drawChart($(this).parent().parent().attr('id').substring(8),this.id);
    });
});


$(async function() {
    await appendTags();
});