
 let EMI_func = () => {
    return ` 
      <h3>EMI Options(G.S.T. included)</h3>
      <p>select bank</p>
      <select name="" id="bank_details">
        <option value="" default></option>
        <option value="">Kotak Mahindra Bank</option>
        <option value="">Axis Bank</option>
        <option value="">RBL Bank</option>
        <option value="">HDFC Bank</option>
        <option value="">Standard Chartered Bank</option>
        <option value="">Bank Of Baroda</option>
        <option value="">ICICI Bank</option>
        <option value="">YES Bank</option>
        <option value=""></option>
        <option value="">American Express</option>
        <option value="">Indusind Bank</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <div id="pay_details">
        <p>EMI Tenure</p>
        <p>Interest Rate</p>
        <p>Monthly Installments</p>
        <p>Total Money</p>
      </div>
      <hr />
      <button id="emi_close">Close</button>
    `;
  };
  export { EMI_func };