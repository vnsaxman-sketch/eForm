import type { EForm } from '../types';

export const forms: EForm[] = [
  // =========================================================
  // CALIFORNIA DMV
  // =========================================================

  {
    id: 'ca-reg-343',
    title: 'Application for Title or Registration',
    shortTitle: 'REG 343',
    description:
      'California DMV application for vehicle title or registration.',
    category: 'DMV',
    jurisdiction: 'California',
    formNumber: 'REG 343',
    officialSourceName: 'California Department of Motor Vehicles',
    officialUrl:
      'https://www.dmv.ca.gov/portal/file/application-for-title-or-registration-reg-343-pdf/',
    fields: [
      {
        id: 'ownerFullName',
        label: 'Registered Owner Full Name',
        type: 'text',
        required: true,
        placeholder: 'First, middle, last',
      },
      {
        id: 'coOwnerFullName',
        label: 'Co-Owner Full Name',
        type: 'text',
        placeholder: 'Optional',
      },
      {
        id: 'address',
        label: 'Street Address',
        type: 'text',
        required: true,
        placeholder: 'Street address',
      },
      {
        id: 'city',
        label: 'City',
        type: 'text',
        required: true,
      },
      {
        id: 'state',
        label: 'State',
        type: 'text',
        required: true,
        placeholder: 'CA',
      },
      {
        id: 'zipCode',
        label: 'ZIP Code',
        type: 'text',
        required: true,
      },
      {
        id: 'vin',
        label: 'Vehicle Identification Number (VIN)',
        type: 'text',
        required: true,
      },
      {
        id: 'year',
        label: 'Vehicle Year',
        type: 'text',
        required: true,
      },
      {
        id: 'make',
        label: 'Vehicle Make',
        type: 'text',
        required: true,
      },
      {
        id: 'model',
        label: 'Vehicle Model',
        type: 'text',
        required: true,
      },
      {
        id: 'licensePlate',
        label: 'California License Plate Number',
        type: 'text',
      },
      {
        id: 'purchaseDate',
        label: 'Purchase Date',
        type: 'date',
      },
      {
        id: 'purchasePrice',
        label: 'Purchase Price',
        type: 'number',
      },
    ],
  },

  {
    id: 'ca-reg-227',
    title: 'Application for Replacement or Transfer of Title',
    shortTitle: 'REG 227',
    description:
      'California DMV application for a duplicate, replacement, or transfer of vehicle title.',
    category: 'DMV',
    jurisdiction: 'California',
    formNumber: 'REG 227',
    officialSourceName: 'California Department of Motor Vehicles',
    officialUrl:
      'https://www.dmv.ca.gov/portal/file/reg-227-pdf/',
    fields: [
      {
        id: 'ownerFullName',
        label: 'Registered Owner Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'address',
        label: 'Street Address',
        type: 'text',
        required: true,
      },
      {
        id: 'city',
        label: 'City',
        type: 'text',
        required: true,
      },
      {
        id: 'state',
        label: 'State',
        type: 'text',
        required: true,
        placeholder: 'CA',
      },
      {
        id: 'zipCode',
        label: 'ZIP Code',
        type: 'text',
        required: true,
      },
      {
        id: 'vin',
        label: 'Vehicle Identification Number (VIN)',
        type: 'text',
        required: true,
      },
      {
        id: 'licensePlate',
        label: 'California License Plate Number',
        type: 'text',
      },
      {
        id: 'vehicleYear',
        label: 'Vehicle Year',
        type: 'text',
      },
      {
        id: 'vehicleMake',
        label: 'Vehicle Make',
        type: 'text',
      },
      {
        id: 'vehicleModel',
        label: 'Vehicle Model',
        type: 'text',
      },
      {
        id: 'reason',
        label: 'Reason for Replacement or Transfer',
        type: 'textarea',
        required: true,
      },
    ],
  },

  {
    id: 'ca-reg-256',
    title: 'Statement of Facts',
    shortTitle: 'REG 256',
    description:
      'California DMV statement used to provide facts or explanations concerning a vehicle or registration transaction.',
    category: 'DMV',
    jurisdiction: 'California',
    formNumber: 'REG 256',
    officialSourceName: 'California Department of Motor Vehicles',
    officialUrl:
      'https://www.dmv.ca.gov/portal/forms/',
    fields: [
      {
        id: 'fullName',
        label: 'Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'address',
        label: 'Street Address',
        type: 'text',
        required: true,
      },
      {
        id: 'city',
        label: 'City',
        type: 'text',
        required: true,
      },
      {
        id: 'state',
        label: 'State',
        type: 'text',
        required: true,
        placeholder: 'CA',
      },
      {
        id: 'zipCode',
        label: 'ZIP Code',
        type: 'text',
        required: true,
      },
      {
        id: 'vin',
        label: 'Vehicle Identification Number (VIN)',
        type: 'text',
      },
      {
        id: 'licensePlate',
        label: 'California License Plate Number',
        type: 'text',
      },
      {
        id: 'statement',
        label: 'Statement of Facts',
        type: 'textarea',
        required: true,
        placeholder:
          'Enter the facts or explanation that apply to your DMV transaction.',
      },
    ],
  },

  {
    id: 'ca-reg-138',
    title: 'Notice of Transfer and Release of Liability',
    shortTitle: 'REG 138',
    description:
      'California DMV notice used to report the sale or transfer of a vehicle and release the seller from future liability.',
    category: 'DMV',
    jurisdiction: 'California',
    formNumber: 'REG 138',
    officialSourceName: 'California Department of Motor Vehicles',
    officialUrl:
      'https://www.dmv.ca.gov/portal/forms/',
    fields: [
      {
        id: 'sellerName',
        label: 'Seller Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'sellerAddress',
        label: 'Seller Address',
        type: 'text',
        required: true,
      },
      {
        id: 'buyerName',
        label: 'Buyer Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'buyerAddress',
        label: 'Buyer Address',
        type: 'text',
      },
      {
        id: 'vin',
        label: 'Vehicle Identification Number (VIN)',
        type: 'text',
        required: true,
      },
      {
        id: 'licensePlate',
        label: 'California License Plate Number',
        type: 'text',
      },
      {
        id: 'vehicleMake',
        label: 'Vehicle Make',
        type: 'text',
      },
      {
        id: 'vehicleModel',
        label: 'Vehicle Model',
        type: 'text',
      },
      {
        id: 'saleDate',
        label: 'Date of Sale or Transfer',
        type: 'date',
        required: true,
      },
      {
        id: 'odometer',
        label: 'Odometer Reading',
        type: 'number',
      },
    ],
  },

  {
    id: 'ca-reg-195',
    title: 'Application for Disabled Person Placard or Plates',
    shortTitle: 'REG 195',
    description:
      'California DMV application for a disabled person placard or disabled person license plates.',
    category: 'DMV',
    jurisdiction: 'California',
    formNumber: 'REG 195',
    officialSourceName: 'California Department of Motor Vehicles',
    officialUrl:
      'https://www.dmv.ca.gov/portal/forms/',
    fields: [
      {
        id: 'applicantName',
        label: 'Applicant Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'address',
        label: 'Street Address',
        type: 'text',
        required: true,
      },
      {
        id: 'city',
        label: 'City',
        type: 'text',
        required: true,
      },
      {
        id: 'state',
        label: 'State',
        type: 'text',
        required: true,
        placeholder: 'CA',
      },
      {
        id: 'zipCode',
        label: 'ZIP Code',
        type: 'text',
        required: true,
      },
      {
        id: 'placardType',
        label: 'Requested Placard or Plates',
        type: 'select',
        required: true,
        options: [
          {
            value: 'temporary',
            label: 'Temporary Placard',
          },
          {
            value: 'permanent',
            label: 'Permanent Placard',
          },
          {
            value: 'plates',
            label: 'Disabled Person License Plates',
          },
        ],
      },
      {
        id: 'vehicleLicensePlate',
        label: 'Vehicle License Plate Number',
        type: 'text',
      },
    ],
  },

  {
    id: 'ca-reg-156',
    title: 'Application for Replacement Plates, Stickers, Documents',
    shortTitle: 'REG 156',
    description:
      'California DMV application for replacement license plates, stickers, or registration documents.',
    category: 'DMV',
    jurisdiction: 'California',
    formNumber: 'REG 156',
    officialSourceName: 'California Department of Motor Vehicles',
    officialUrl:
      'https://www.dmv.ca.gov/portal/file/application-for-replacement-plates-stickers-documents-reg-156-pdf/',
    fields: [
      {
        id: 'registeredOwner',
        label: 'Registered Owner Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'address',
        label: 'Street Address',
        type: 'text',
        required: true,
      },
      {
        id: 'city',
        label: 'City',
        type: 'text',
        required: true,
      },
      {
        id: 'state',
        label: 'State',
        type: 'text',
        required: true,
        placeholder: 'CA',
      },
      {
        id: 'zipCode',
        label: 'ZIP Code',
        type: 'text',
        required: true,
      },
      {
        id: 'licensePlate',
        label: 'California License Plate Number',
        type: 'text',
      },
      {
        id: 'vin',
        label: 'Vehicle Identification Number (VIN)',
        type: 'text',
      },
      {
        id: 'replacementType',
        label: 'Replacement Needed',
        type: 'select',
        required: true,
        options: [
          {
            value: 'plates',
            label: 'License Plates',
          },
          {
            value: 'sticker',
            label: 'Registration Sticker',
          },
          {
            value: 'registration',
            label: 'Registration Document',
          },
          {
            value: 'other',
            label: 'Other Document',
          },
        ],
      },
      {
        id: 'reason',
        label: 'Reason for Replacement',
        type: 'textarea',
        required: true,
      },
    ],
  },

  {
    id: 'ca-reg-135',
    title: 'Bill of Sale',
    shortTitle: 'REG 135',
    description:
      'California DMV bill of sale used to document the sale or transfer of a vehicle or vessel.',
    category: 'DMV',
    jurisdiction: 'California',
    formNumber: 'REG 135',
    officialSourceName: 'California Department of Motor Vehicles',
    officialUrl:
      'https://www.dmv.ca.gov/portal/forms/',
    fields: [
      {
        id: 'sellerName',
        label: 'Seller Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'buyerName',
        label: 'Buyer Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'saleDate',
        label: 'Date of Sale',
        type: 'date',
        required: true,
      },
      {
        id: 'salePrice',
        label: 'Sale Price',
        type: 'number',
        required: true,
      },
      {
        id: 'vehicleYear',
        label: 'Vehicle Year',
        type: 'text',
        required: true,
      },
      {
        id: 'vehicleMake',
        label: 'Vehicle Make',
        type: 'text',
        required: true,
      },
      {
        id: 'vehicleModel',
        label: 'Vehicle Model',
        type: 'text',
        required: true,
      },
      {
        id: 'vin',
        label: 'Vehicle Identification Number (VIN)',
        type: 'text',
        required: true,
      },
      {
        id: 'licensePlate',
        label: 'California License Plate Number',
        type: 'text',
      },
      {
        id: 'additionalTerms',
        label: 'Additional Terms or Conditions',
        type: 'textarea',
      },
    ],
  },

  // =========================================================
  // EMPLOYMENT
  // =========================================================

  {
    id: 'employment-application',
    title: 'Employment Application',
    shortTitle: 'Employment Application',
    description:
      'General employment application worksheet for collecting applicant information, work history, education, and availability.',
    category: 'Employment',
    jurisdiction: 'Generic',
    fields: [
      {
        id: 'fullName',
        label: 'Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'tel',
        required: true,
      },
      {
        id: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
      },
      {
        id: 'address',
        label: 'Street Address',
        type: 'text',
        required: true,
      },
      {
        id: 'city',
        label: 'City',
        type: 'text',
        required: true,
      },
      {
        id: 'state',
        label: 'State',
        type: 'text',
        required: true,
      },
      {
        id: 'zipCode',
        label: 'ZIP Code',
        type: 'text',
        required: true,
      },
      {
        id: 'position',
        label: 'Position Applied For',
        type: 'text',
        required: true,
      },
      {
        id: 'startDate',
        label: 'Available Start Date',
        type: 'date',
      },
      {
        id: 'employmentType',
        label: 'Employment Type',
        type: 'select',
        options: [
          {
            value: 'full-time',
            label: 'Full-Time',
          },
          {
            value: 'part-time',
            label: 'Part-Time',
          },
          {
            value: 'temporary',
            label: 'Temporary',
          },
          {
            value: 'seasonal',
            label: 'Seasonal',
          },
        ],
      },
      {
        id: 'workHistory',
        label: 'Previous Employment / Work History',
        type: 'textarea',
      },
      {
        id: 'education',
        label: 'Education and Training',
        type: 'textarea',
      },
      {
        id: 'skills',
        label: 'Skills and Qualifications',
        type: 'textarea',
      },
    ],
  },

  {
    id: 'employee-information',
    title: 'Employee Information Form',
    shortTitle: 'Employee Information',
    description:
      'General employee information worksheet for maintaining basic employee records.',
    category: 'Employment',
    jurisdiction: 'Generic',
    fields: [
      {
        id: 'employeeName',
        label: 'Employee Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'preferredName',
        label: 'Preferred Name',
        type: 'text',
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'tel',
      },
      {
        id: 'email',
        label: 'Email Address',
        type: 'email',
      },
      {
        id: 'address',
        label: 'Home Address',
        type: 'text',
      },
      {
        id: 'city',
        label: 'City',
        type: 'text',
      },
      {
        id: 'state',
        label: 'State',
        type: 'text',
      },
      {
        id: 'zipCode',
        label: 'ZIP Code',
        type: 'text',
      },
      {
        id: 'jobTitle',
        label: 'Job Title',
        type: 'text',
      },
      {
        id: 'department',
        label: 'Department',
        type: 'text',
      },
      {
        id: 'hireDate',
        label: 'Hire Date',
        type: 'date',
      },
      {
        id: 'employeeId',
        label: 'Employee ID',
        type: 'text',
      },
    ],
  },

  {
    id: 'emergency-contact',
    title: 'Employee Emergency Contact Form',
    shortTitle: 'Emergency Contact',
    description:
      'General worksheet for recording an employee emergency contact.',
    category: 'Employment',
    jurisdiction: 'Generic',
    fields: [
      {
        id: 'employeeName',
        label: 'Employee Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'contactName',
        label: 'Emergency Contact Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'relationship',
        label: 'Relationship',
        type: 'text',
        required: true,
      },
      {
        id: 'primaryPhone',
        label: 'Primary Phone',
        type: 'tel',
        required: true,
      },
      {
        id: 'secondaryPhone',
        label: 'Secondary Phone',
        type: 'tel',
      },
      {
        id: 'email',
        label: 'Email Address',
        type: 'email',
      },
      {
        id: 'address',
        label: 'Address',
        type: 'text',
      },
      {
        id: 'additionalInformation',
        label: 'Additional Information',
        type: 'textarea',
      },
    ],
  },

  {
    id: 'employee-availability',
    title: 'Employee Availability Form',
    shortTitle: 'Employee Availability',
    description:
      'General worksheet for recording an employee’s available work days and hours.',
    category: 'Employment',
    jurisdiction: 'Generic',
    fields: [
      {
        id: 'employeeName',
        label: 'Employee Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'position',
        label: 'Position',
        type: 'text',
      },
      {
        id: 'effectiveDate',
        label: 'Availability Effective Date',
        type: 'date',
      },
      {
        id: 'monday',
        label: 'Monday Availability',
        type: 'text',
        placeholder: 'Example: 9:00 AM - 5:00 PM',
      },
      {
        id: 'tuesday',
        label: 'Tuesday Availability',
        type: 'text',
      },
      {
        id: 'wednesday',
        label: 'Wednesday Availability',
        type: 'text',
      },
      {
        id: 'thursday',
        label: 'Thursday Availability',
        type: 'text',
      },
      {
        id: 'friday',
        label: 'Friday Availability',
        type: 'text',
      },
      {
        id: 'saturday',
        label: 'Saturday Availability',
        type: 'text',
      },
      {
        id: 'sunday',
        label: 'Sunday Availability',
        type: 'text',
      },
      {
        id: 'notes',
        label: 'Notes',
        type: 'textarea',
      },
    ],
  },

  {
    id: 'direct-deposit-authorization',
    title: 'Direct Deposit Authorization',
    shortTitle: 'Direct Deposit',
    description:
      'General payroll worksheet for collecting information needed to request direct deposit. Verify employer and financial-institution requirements.',
    category: 'Employment',
    jurisdiction: 'Generic',
    fields: [
      {
        id: 'employeeName',
        label: 'Employee Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'employeeId',
        label: 'Employee ID',
        type: 'text',
      },
      {
        id: 'bankName',
        label: 'Financial Institution Name',
        type: 'text',
        required: true,
      },
      {
        id: 'accountHolder',
        label: 'Account Holder Name',
        type: 'text',
        required: true,
      },
      {
        id: 'accountType',
        label: 'Account Type',
        type: 'select',
        required: true,
        options: [
          {
            value: 'checking',
            label: 'Checking',
          },
          {
            value: 'savings',
            label: 'Savings',
          },
        ],
      },
      {
        id: 'routingNumber',
        label: 'Routing Number',
        type: 'text',
        required: true,
      },
      {
        id: 'accountNumber',
        label: 'Account Number',
        type: 'text',
        required: true,
      },
      {
        id: 'effectiveDate',
        label: 'Effective Date',
        type: 'date',
      },
      {
        id: 'authorization',
        label:
          'I authorize my employer to use the information provided above for direct deposit processing.',
        type: 'checkbox',
        required: true,
      },
    ],
  },

  {
    id: 'employee-time-off-request',
    title: 'Employee Time-Off Request',
    shortTitle: 'Time-Off Request',
    description:
      'General employee worksheet for requesting vacation, personal time, or other time away from work.',
    category: 'Employment',
    jurisdiction: 'Generic',
    fields: [
      {
        id: 'employeeName',
        label: 'Employee Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'department',
        label: 'Department',
        type: 'text',
      },
      {
        id: 'timeOffType',
        label: 'Type of Time Off',
        type: 'select',
        required: true,
        options: [
          {
            value: 'vacation',
            label: 'Vacation',
          },
          {
            value: 'personal',
            label: 'Personal',
          },
          {
            value: 'sick',
            label: 'Sick',
          },
          {
            value: 'other',
            label: 'Other',
          },
        ],
      },
      {
        id: 'startDate',
        label: 'Start Date',
        type: 'date',
        required: true,
      },
      {
        id: 'endDate',
        label: 'End Date',
        type: 'date',
        required: true,
      },
      {
        id: 'reason',
        label: 'Reason / Notes',
        type: 'textarea',
      },
    ],
  },

  // =========================================================
  // FEDERAL EMPLOYMENT / TAX FORMS
  // =========================================================

  {
    id: 'federal-i9',
    title: 'Employment Eligibility Verification',
    shortTitle: 'Form I-9',
    description:
      'USCIS Form I-9 is used to verify the identity and employment authorization of individuals hired for employment in the United States.',
    category: 'Employment',
    jurisdiction: 'Federal',
    formNumber: 'I-9',
    officialSourceName: 'U.S. Citizenship and Immigration Services',
    officialUrl:
      'https://www.uscis.gov/i-9',
    fields: [],
  },

  {
    id: 'federal-w4',
    title: "Employee's Withholding Certificate",
    shortTitle: 'Form W-4',
    description:
      'Federal employee withholding certificate used by an employee to provide information needed by an employer to calculate federal income tax withholding.',
    category: 'Employment',
    jurisdiction: 'Federal',
    formNumber: 'W-4',
    officialSourceName: 'Internal Revenue Service',
    officialUrl:
      'https://www.irs.gov/forms-pubs/about-form-w-4',
    fields: [
      {
        id: 'firstName',
        label: 'First Name',
        type: 'text',
        required: true,
      },
      {
        id: 'lastName',
        label: 'Last Name',
        type: 'text',
        required: true,
      },
      {
        id: 'address',
        label: 'Address',
        type: 'text',
        required: true,
      },
      {
        id: 'city',
        label: 'City',
        type: 'text',
        required: true,
      },
      {
        id: 'state',
        label: 'State',
        type: 'text',
        required: true,
      },
      {
        id: 'zipCode',
        label: 'ZIP Code',
        type: 'text',
        required: true,
      },
      {
        id: 'filingStatus',
        label: 'Filing Status',
        type: 'select',
        required: true,
        options: [
          {
            value: 'single',
            label:
              'Single or Married filing separately',
          },
          {
            value: 'jointly',
            label:
              'Married filing jointly or Qualifying surviving spouse',
          },
          {
            value: 'head',
            label: 'Head of household',
          },
        ],
      },
      {
        id: 'multipleJobs',
        label:
          'Multiple jobs or spouse works',
        type: 'checkbox',
      },
      {
        id: 'dependents',
        label:
          'Claiming qualifying children or other dependents',
        type: 'checkbox',
      },
      {
        id: 'otherIncome',
        label: 'Other income',
        type: 'number',
      },
      {
        id: 'deductions',
        label: 'Deductions',
        type: 'number',
      },
      {
        id: 'extraWithholding',
        label: 'Extra withholding',
        type: 'number',
      },
    ],
  },

  {
    id: 'federal-w9',
    title:
      'Request for Taxpayer Identification Number and Certification',
    shortTitle: 'Form W-9',
    description:
      'Federal form used to provide a taxpayer identification number and certification to a requester.',
    category: 'Employment',
    jurisdiction: 'Federal',
    formNumber: 'W-9',
    officialSourceName: 'Internal Revenue Service',
    officialUrl:
      'https://www.irs.gov/forms-pubs/about-form-w-9',
    fields: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        required: true,
      },
      {
        id: 'businessName',
        label: 'Business Name / Disregarded Entity Name',
        type: 'text',
      },
      {
        id: 'taxClassification',
        label: 'Federal Tax Classification',
        type: 'select',
        required: true,
        options: [
          {
            value: 'individual',
            label:
              'Individual / Sole Proprietor',
          },
          {
            value: 'c-corp',
            label: 'C Corporation',
          },
          {
            value: 's-corp',
            label: 'S Corporation',
          },
          {
            value: 'partnership',
            label: 'Partnership',
          },
          {
            value: 'trust',
            label: 'Trust / Estate',
          },
          {
            value: 'llc',
            label: 'Limited Liability Company',
          },
          {
            value: 'other',
            label: 'Other',
          },
        ],
      },
      {
        id: 'address',
        label: 'Address',
        type: 'text',
        required: true,
      },
      {
        id: 'city',
        label: 'City',
        type: 'text',
        required: true,
      },
      {
        id: 'state',
        label: 'State',
        type: 'text',
        required: true,
      },
      {
        id: 'zipCode',
        label: 'ZIP Code',
        type: 'text',
        required: true,
      },
      {
        id: 'taxpayerIdentificationNumber',
        label: 'Taxpayer Identification Number',
        type: 'text',
        required: true,
        helpText:
          'Enter the appropriate taxpayer identification number requested by the official form.',
      },
    ],
  },

  // =========================================================
  // CALIFORNIA EMPLOYMENT / PAYROLL
  // =========================================================

  {
    id: 'ca-de4',
    title: "Employee's Withholding Allowance Certificate",
    shortTitle: 'DE 4',
    description:
      'California Employee’s Withholding Allowance Certificate used by employees to provide information for California income tax withholding.',
    category: 'Employment',
    jurisdiction: 'California',
    formNumber: 'DE 4',
    officialSourceName:
      'California Employment Development Department',
    officialUrl:
      'https://edd.ca.gov/pdf_pub_ctr/de4.pdf',
    fields: [
      {
        id: 'firstName',
        label: 'First Name',
        type: 'text',
        required: true,
      },
      {
        id: 'middleName',
        label: 'Middle Name',
        type: 'text',
      },
      {
        id: 'lastName',
        label: 'Last Name',
        type: 'text',
        required: true,
      },
      {
        id: 'socialSecurityNumber',
        label: 'Social Security Number',
        type: 'text',
        required: true,
      },
      {
        id: 'address',
        label: 'Address',
        type: 'text',
        required: true,
      },
      {
        id: 'city',
        label: 'City',
        type: 'text',
        required: true,
      },
      {
        id: 'state',
        label: 'State',
        type: 'text',
        required: true,
        placeholder: 'CA',
      },
      {
        id: 'zipCode',
        label: 'ZIP Code',
        type: 'text',
        required: true,
      },
      {
        id: 'filingStatus',
        label: 'Filing Status',
        type: 'select',
        required: true,
        options: [
          {
            value: 'single',
            label:
              'Single or Married (with two or more incomes)',
          },
          {
            value: 'married-one-income',
            label: 'Married (one income)',
          },
          {
            value: 'head-of-household',
            label: 'Head of Household',
          },
        ],
      },
      {
        id: 'regularAllowances',
        label: 'Regular Withholding Allowances',
        type: 'number',
      },
      {
        id: 'estimatedDeductionAllowances',
        label:
          'Estimated Deduction Allowances',
        type: 'number',
      },
      {
        id: 'totalAllowances',
        label: 'Total Number of Allowances',
        type: 'number',
      },
      {
        id: 'additionalWithholding',
        label:
          'Additional Amount to Withhold Each Pay Period',
        type: 'number',
      },
      {
        id: 'claimExemption',
        label:
          'I claim exemption from withholding if I meet the requirements of the current official DE 4.',
        type: 'checkbox',
      },
    ],
  },

  // =========================================================
  // TAX
  // =========================================================

  {
    id: 'personal-tax-information',
    title: 'Personal Tax Information Worksheet',
    shortTitle: 'Tax Information',
    description:
      'General worksheet for organizing personal information commonly needed when preparing a tax return.',
    category: 'Tax',
    jurisdiction: 'Generic',
    fields: [
      {
        id: 'fullName',
        label: 'Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'ssn',
        label: 'Social Security Number',
        type: 'text',
      },
      {
        id: 'dateOfBirth',
        label: 'Date of Birth',
        type: 'date',
      },
      {
        id: 'address',
        label: 'Address',
        type: 'text',
      },
      {
        id: 'city',
        label: 'City',
        type: 'text',
      },
      {
        id: 'state',
        label: 'State',
        type: 'text',
      },
      {
        id: 'zipCode',
        label: 'ZIP Code',
        type: 'text',
      },
      {
        id: 'filingStatus',
        label: 'Filing Status',
        type: 'select',
        options: [
          {
            value: 'single',
            label: 'Single',
          },
          {
            value: 'married-joint',
            label: 'Married Filing Jointly',
          },
          {
            value: 'married-separate',
            label: 'Married Filing Separately',
          },
          {
            value: 'head',
            label: 'Head of Household',
          },
          {
            value: 'widow',
            label:
              'Qualifying Surviving Spouse',
          },
        ],
      },
      {
        id: 'notes',
        label: 'Notes',
        type: 'textarea',
      },
    ],
  },

  // =========================================================
  // TRAVEL
  // =========================================================

  {
    id: 'passport-ds11',
    title: 'U.S. Passport Application',
    shortTitle: 'Form DS-11',
    description:
      'U.S. Department of State passport application resource. Use the official source for current eligibility requirements and the official application.',
    category: 'Travel',
    jurisdiction: 'Federal',
    formNumber: 'DS-11',
    officialSourceName:
      'U.S. Department of State',
    officialUrl:
      'https://travel.state.gov/content/travel/en/passports/how-apply/forms.html',
    fields: [],
  },

  // =========================================================
  // HOUSING
  // =========================================================

  {
    id: 'rental-application',
    title: 'Rental Application',
    shortTitle: 'Rental Application',
    description:
      'General rental application worksheet for collecting applicant and housing information.',
    category: 'Housing',
    jurisdiction: 'Generic',
    fields: [
      {
        id: 'applicantName',
        label: 'Applicant Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'tel',
        required: true,
      },
      {
        id: 'email',
        label: 'Email Address',
        type: 'email',
      },
      {
        id: 'currentAddress',
        label: 'Current Address',
        type: 'text',
        required: true,
      },
      {
        id: 'employer',
        label: 'Current Employer',
        type: 'text',
      },
      {
        id: 'monthlyIncome',
        label: 'Approximate Monthly Income',
        type: 'number',
      },
      {
        id: 'desiredMoveInDate',
        label: 'Desired Move-In Date',
        type: 'date',
      },
      {
        id: 'occupants',
        label: 'Other Intended Occupants',
        type: 'textarea',
      },
      {
        id: 'references',
        label: 'References',
        type: 'textarea',
      },
    ],
  },

  // =========================================================
  // HEALTHCARE
  // =========================================================

  {
    id: 'medical-records-release',
    title: 'Medical Records Release Authorization',
    shortTitle: 'Medical Records Release',
    description:
      'General healthcare information-release worksheet. Verify that the receiving healthcare provider accepts this format and that all required authorization language is present.',
    category: 'Healthcare',
    jurisdiction: 'Generic',
    fields: [
      {
        id: 'patientName',
        label: 'Patient Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'dateOfBirth',
        label: 'Date of Birth',
        type: 'date',
        required: true,
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'tel',
      },
      {
        id: 'recordsFrom',
        label: 'Records Requested From',
        type: 'text',
        required: true,
      },
      {
        id: 'recordsTo',
        label: 'Records Released To',
        type: 'text',
        required: true,
      },
      {
        id: 'recordsRequested',
        label: 'Records Requested',
        type: 'textarea',
        required: true,
      },
      {
        id: 'purpose',
        label: 'Purpose of Release',
        type: 'textarea',
      },
      {
        id: 'expirationDate',
        label: 'Authorization Expiration Date',
        type: 'date',
      },
    ],
  },

  // =========================================================
  // BUSINESS
  // =========================================================

  {
    id: 'small-business-information',
    title: 'Small Business Information Sheet',
    shortTitle: 'Business Information',
    description:
      'General worksheet for organizing basic business contact and ownership information.',
    category: 'Business',
    jurisdiction: 'Generic',
    fields: [
      {
        id: 'businessName',
        label: 'Business Name',
        type: 'text',
        required: true,
      },
      {
        id: 'legalName',
        label: 'Legal Business Name',
        type: 'text',
      },
      {
        id: 'ownerName',
        label: 'Owner / Principal Name',
        type: 'text',
        required: true,
      },
      {
        id: 'businessPhone',
        label: 'Business Phone',
        type: 'tel',
      },
      {
        id: 'businessEmail',
        label: 'Business Email',
        type: 'email',
      },
      {
        id: 'website',
        label: 'Website',
        type: 'text',
      },
      {
        id: 'address',
        label: 'Business Address',
        type: 'text',
      },
      {
        id: 'city',
        label: 'City',
        type: 'text',
      },
      {
        id: 'state',
        label: 'State',
        type: 'text',
      },
      {
        id: 'zipCode',
        label: 'ZIP Code',
        type: 'text',
      },
      {
        id: 'description',
        label: 'Business Description',
        type: 'textarea',
      },
    ],
  },

  // =========================================================
  // PERSONAL
  // =========================================================

  {
    id: 'personal-information',
    title: 'Personal Information Sheet',
    shortTitle: 'Personal Information',
    description:
      'General worksheet for organizing personal contact information for your own records.',
    category: 'Personal',
    jurisdiction: 'Generic',
    fields: [
      {
        id: 'fullName',
        label: 'Full Name',
        type: 'text',
        required: true,
      },
      {
        id: 'preferredName',
        label: 'Preferred Name',
        type: 'text',
      },
      {
        id: 'dateOfBirth',
        label: 'Date of Birth',
        type: 'date',
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'tel',
      },
      {
        id: 'email',
        label: 'Email Address',
        type: 'email',
      },
      {
        id: 'address',
        label: 'Street Address',
        type: 'text',
      },
      {
        id: 'city',
        label: 'City',
        type: 'text',
      },
      {
        id: 'state',
        label: 'State',
        type: 'text',
      },
      {
        id: 'zipCode',
        label: 'ZIP Code',
        type: 'text',
      },
      {
        id: 'notes',
        label: 'Notes',
        type: 'textarea',
      },
    ],
  },
];
