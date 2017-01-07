$(function () {
  // console.log('document is ready');
  var salaryArray = [0];
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
        salaryArray.push(input.value);
        }
    });
    appendDom(formData);
    console.log(salaryArray);
    appendSalary(salaryArray);
    clearForm();
  });

});

function appendDom(emp) {
  var $emp = $('<div class="employee"></div>'); // create a div jQuery object

  $emp.append('<label for="employeeName">Name:</label>');
  $emp.append('<p name="employeeName">' + emp.employeeFirstName + ' ' + emp.employeeLastName + '</p><br>'); // add our employee data
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
  var monthlySalary = 0;
  var $sal = $('<div class="monthlySalary"></div>');

  salaryArray.forEach(function (input) {
    var value = toString(input.value)
    monthlySalary += value;
  });

  $sal.append('<p>'+ monthlySalary + '</p>')
  $('#monthlySalary').append($sal);
}
