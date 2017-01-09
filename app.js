var salaryArray = [];
var subtractor = 0;
$(function () {
  // console.log('document is ready');


  $('form').on('submit', function (event) {
    // console.log('form submitted');

    event.preventDefault();

    var formData = {};
    var formAsArray = $(this).serializeArray();

    formAsArray.forEach(function (input) {
      formData[input.name] = input.value;
    });
    formAsArray.forEach(function (input){
        if(input.name == "annualSalary"){
        var salaryValue= input.value;
        salaryArray.push(salaryValue);
        }
    });

    appendDom(formData);
    console.log(salaryArray);
    appendSalary(salaryArray);
    clearForm();
  });
  $(document).on('click','#delete', function (){
    var yearlySalary = 0;
    var newMonthly = 0;
    var subtractor = $(this).closest('.employee').find('#salary').text();
    subtractor = Number(subtractor);
    var $nMS = $('<div class="monthlySalary3"></div>');
    salaryArray.forEach(function(input){
      var value = Number(input);
      yearlySalary += value;
      newMonthly = (yearlySalary - subtractor)/12;
    });
    salaryArray.forEach(function(input, i){
      if (input == subtractor){
        salaryArray = salaryArray.splice(i-1, 1);
    }
  })
    $(this).closest('.employee').remove();
    $('div').remove('.monthlySalary3');
    $nMS.append('<p>$'+newMonthly+'</p>');
    $('#monthlySalary3').append($nMS);
  });
});

function appendDom(emp) {
  var $emp = $('<div class="employee"></div>'); // create a div jQuery object

  $emp.append('<label for="employeeName">Name:</label>');
  $emp.append('<p name="employeeName">' + emp.employeeFirstName + ' ' + emp.employeeLastName + '</p><br>'); // add our employee data
  $emp.append('<button id= "delete">x</button>')
  $emp.append('<label for="id">ID#:</label>');
  $emp.append('<p name="id">' + emp.employeeIdNumber + '</p><br>');
  $emp.append('<label for="title">Job Title:</label>');
  $emp.append('<p name="title">' + emp.jobTitle + '</p><br>');
  $emp.append('<label for="salary">Annual Salary:</label>');
  $emp.append('<p id="salary" name="salary">' + emp.annualSalary + '</p><br>');

  $('#employees').append($emp); // append our div to the DOM
}

function clearForm() {
  $('form').find('input[type=text]').val('');
  $('form').find('input[type=number]').val('');
}

function appendSalary(sal){
  var monthlySalary1 = 0;
  var yearlySalary = 0;
  $('div').remove('.monthlySalary3');
  var $sal = $('<div class="monthlySalary3"></div>');

  sal.forEach(function (input) {
    var value = Number(input);
    yearlySalary += value;
    monthlySalary1 = yearlySalary/12;
    monthlySalary1 = parseFloat(monthlySalary1).toFixed(2);
  });
  // }
  $sal.append('<p>$'+monthlySalary1+'</p>');
  $('#monthlySalary3').append($sal);
}
