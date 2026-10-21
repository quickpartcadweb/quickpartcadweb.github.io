const toggle=document.querySelector('.mobile-toggle');const nav=document.querySelector('.navlinks');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
// Preselect package from the link query; leave FormSubmit POST to the browser.
const enquiryForm=document.querySelector('form[name="website-enquiry"]');
if(enquiryForm){
 const choice=enquiryForm.querySelector('[name="package"]');
 const params=new URLSearchParams(window.location.search);
 if(params.get('package')==='search-ready') choice.value='Search-Ready Website ($149)';
 if(params.get('package')==='starter') choice.value='Starter Website ($99)';
}

// FormSubmit supports native multipart POST; only block files above its 10 MB limit.
if(enquiryForm){
 const attachment=enquiryForm.querySelector('#enquiry-attachment');
 const status=enquiryForm.querySelector('#enquiry-status');
 const maxBytes=10*1024*1024;
 const validateAttachment=()=>{
   const file=attachment?.files?.[0];
   if(file && file.size>maxBytes){
     attachment.setCustomValidity('File exceeds 10 MB. Please choose a smaller file.');
     if(status) status.textContent='Attachment is too large (maximum 10 MB).';
     return false;
   }
   attachment?.setCustomValidity('');
   if(status) status.textContent='';
   return true;
 };
 attachment?.addEventListener('change',validateAttachment);
 enquiryForm.addEventListener('submit',event=>{
   if(!validateAttachment()){event.preventDefault();attachment.reportValidity();}
 });
}
