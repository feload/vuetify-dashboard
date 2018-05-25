/**
 * t().
 * Converts a template into text by replacing placeholders based on an object properties.
 *
 * @param String template.
 * @param Object params.
 *
 * @return String.
 */
export const t = (template, params) => {

  const phRegExp = new RegExp(/{([ ])?([a-zA-Z._-]+)([ ])?}/g);
  const varRegExp = new RegExp(/[a-zA-Z._-]+/);

  let text = template;
  template.match(phRegExp).map(placeholder => {

    const placeholders = placeholder.match(varRegExp)[0].split('.');
    let tmp_value = params;

    placeholders.map(prop => {
      if(typeof tmp_value[prop] != 'object'){
        text = text.replace(new RegExp(placeholder, 'g'), tmp_value[prop]);
      }else{
        if(tmp_value[prop].hasOwnProperty('length')){
          text = text.replace(new RegExp(placeholder, 'g'), tmp_value[prop].join(','));
        }else{
          tmp_value = tmp_value[prop];
        }
      }
    });
  });

  return text;

}