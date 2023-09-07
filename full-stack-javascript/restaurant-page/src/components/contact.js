function contact() {
    const content = document.querySelector(".content");

    const contact = document.createElement("div");
    contact.className = "contact";

    // Address
    const contactElement1 = document.createElement("div");

    const address = document.createElement("div");
    address.className = "contact-header";
    address.textContent = "Address";

    const addressText = document.createElement("div");
    addressText.className = "contact-text";
    addressText.textContent = "1234 Main St, City, State 12345";

    contactElement1.appendChild(address);
    contactElement1.appendChild(addressText);

    // Phone Number
    const contactElement2 = document.createElement("div");

    const phoneNumber = document.createElement("div");
    phoneNumber.className = "contact-header";
    phoneNumber.textContent = "Phone Number";

    const phoneNumberText = document.createElement("div");
    phoneNumberText.className = "contact-text";
    phoneNumberText.textContent = "(123) 456-7890";

    contactElement2.appendChild(phoneNumber);
    contactElement2.appendChild(phoneNumberText);

    // Email
    const contactElement3 = document.createElement("div");

    const email = document.createElement("div");
    email.className = "contact-header";
    email.textContent = "Email";

    const emailText = document.createElement("div");
    emailText.className = "contact-text";
    emailText.textContent = "info@alfredospizza.com";

    contactElement3.appendChild(email);
    contactElement3.appendChild(emailText);

    // Operating Hours
    const contactElement4 = document.createElement("div");

    const operatingHours = document.createElement("div");
    operatingHours.className = "contact-header";
    operatingHours.textContent = "Operating Hours";

    const operatingHoursText = document.createElement("div");
    operatingHoursText.className = "contact-text";
    operatingHoursText.textContent = "Monday - Friday: 11:00 AM - 10:00 PM";

    contactElement4.appendChild(operatingHours);
    contactElement4.appendChild(operatingHoursText);

    contact.appendChild(contactElement1);
    contact.appendChild(contactElement2);
    contact.appendChild(contactElement3);
    contact.appendChild(contactElement4);
    content.appendChild(contact);
}

export default contact;
