function company_API(url, method) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open(method, url);
        request.responseType = 'json';
        request.onload = function () {
            if (request.status == 200) {
                resolve(request.response);
            } else {
                reject(Error('THERE WAS AN ERROR LOADING DATA ASJFDSAJFGJRG'));
            }
        }
        request.onerror = function () {
            reject(Error('THERE WAS AN INTERNET ERROR (I THINK)'));
        }
        request.send();
    });
}


// Punto 1
let empleados;

company_API('https://utn-lubnan-api-1.herokuapp.com/api/Employee', 'GET')
  .then((employees) => {
      //console.log(employees);
      company_API('https://utn-lubnan-api-1.herokuapp.com/api/Company','GET')
      .then((company) =>{
        //console.log(company);
        

      })
  })
  .catch((reason) => {
      console.log(Error(reason));
  });

  




/* company_API('https://utn-lubnan-api-1.herokuapp.com/api/Employee', 'GET')
  .then((employees) => {
      console.log(employees);
      let paragraph = document.querySelector('p');
      paragraph.textContent = 'EMPLOYEE MAILS: ';
      employees.forEach(employee => { paragraph.textContent += employee.name + ", "; });
  })
  .catch((reason) => {
      console.log(Error(reason));
  }); */

/*  company_API('https://utn-lubnan-api-1.herokuapp.com/api/Company', 'GET')
     .then((company) => {
         console.log(company);

         let paragraph = document.querySelector('a');
         paragraph.textContent = 'COMPANIES: ';
         company.forEach(company => {
          paragraph.textContent += company.companyId + ", ";
         });
     })
     .catch((reason2) => {
         console.log(Error(reason2));
     }); */


/*        company_API('https://utn-lubnan-api-1.herokuapp.com/api/Employee', 'GET')
           .then((employees) => {
               return company_API('https://utn-lubnan-api-1.herokuapp.com/api/Company', 'GET')
                   .then((companies) => {
                       const companyMap = new Map(companies.map(company => [company.CompanyId, company]));
                       //const companyMap = new Map(companies.CompanyId, company); ASI NO FUNCIONA PERO NO ENTIENDO POR QUE NO
                       const employeesWithCompanies = employees.map(employee => ({
                           EmployeeName: `${employee.firstName} ${employee.lastName}`,
                           CompanyName: companyMap.get(employee.CompanyId)?.name || 'Desconocida'
                       }));

                       return employeesWithCompanies;
                   });
           })
           .then((employeesWithCompanies) => {
               console.log(employeesWithCompanies);

               // Obtén una referencia al elemento de lista (ul)
               let list = document.querySelector('ul');

               // Recorre la lista de empleados con compañías y crea elementos de lista (li) para cada uno
               employeesWithCompanies.forEach(employee => {
                   // Crea un nuevo elemento de lista (li)
                   let listItem = document.createElement('li');

                   // Establece el contenido del elemento de lista con el nombre del empleado y la compañía
                   listItem.textContent = `${employee.EmployeeName} works in ${employee.CompanyName}`;

                   // Agrega el elemento de lista a la lista (ul)
                   list.appendChild(listItem);
               });
           })
           .catch((error) => {
               console.error("Error:", error);
           }); */

           
/*       company_API('https://utn-lubnan-api-1.herokuapp.com/api/Employee/523', 'DELETE')
          .then((employees) => {
                  console.log('se elimno :)');
          })
          .catch((reason) => {
              console.log(Error(reason));
          }); */





/*
company_API('https://utn-lubnan-api-1.herokuapp.com/api/Employee', 'POST')
    .then((response) => {
    })
    .catch((error) => {
        console.error("Error:", error);
        console.log(error);
  
  });
  */
