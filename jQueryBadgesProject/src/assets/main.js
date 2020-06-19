$(function() {

$(document).ready(function() {
  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/SoftwareDevPro.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      var courses_completed = response.courses.completed;
      var badges = $("#badges");

      for (var idx = 0; idx < courses_completed.length; idx++) {
       console.log(courses_completed[idx]);

        // title
        var title = courses_completed[idx].title;
        var title_html = "<h3>" + title + "</h3>";
        //var title_element = $(title_html);

        // image
        var image = courses_completed[idx].badge;
        var image_html = "<img src='" + image + "'/>";

        // course button
        var button_href   = courses_completed[idx].url;
        var button_target = "_blank";
        var button_html   = "<a type='button'"
                          + " class='btn btn-primary'"
                          + " href='" + button_href  + "'"
                          + " target='" + button_target  + "'"
                          + ">See Course</a>";

        // course
        var course_html = "<div class='course'>"
                        + title_html
                        + image_html
                        + button_html
                        + "</div>";

        //var course_element = $(course);
        //console.log(course_html);

        badges.append($(course_html));
      }
    }
  });

});

});
