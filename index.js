/**
 * @typedef WooCommerce_Coupon
 * @property {number} id - [READ-ONLY]Unique identifier for the object.
 * @property {string} code - [MANDATORY]Coupon code.
 * @property {string} amount - The amount of discount. Should always be numeric, even if setting a percentage.
 * @property {Date} date_created - [READ-ONLY]The date the coupon was created, in the site's timezone.
 * @property {Date} date_created_gmt - [READ-ONLY]The date the coupon was created, as GMT.
 * @property {Date} date_modified - [READ-ONLY]The date the coupon was last modified, in the site's timezone.
 * @property {Date} date_modified_gmt - [READ-ONLY]The date the coupon was last modified, as GMT.
 * @property {'percent','fixed_cart','fixed_product'} [discount_type='fixed_cart'] - Determines the type of discount that will be applied.
 * @property {string} description - Coupon description.
 * @property {string} date_expires - The date the coupon expires, in the site's timezone.
 * @property {string} date_expires_gmt - The date the coupon expires, as GMT.
 * @property {number} usage_count - [READ-ONLY]Number of times the coupon has been used already.
 * @property {boolean} [individual_use=false] - If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.
 * @property {number[]} product_ids - List of product IDs the coupon can be used on.
 * @property {number[]} excluded_product_ids - List of product IDs the coupon cannot be used on.
 * @property {number} usage_limit - How many times the coupon can be used in total.
 * @property {number} usage_limit_per_user - How many times the coupon can be used per customer.
 * @property {number} limit_usage_to_x_items - Max number of items in the cart the coupon can be applied to.
 * @property {boolean} [free_shipping=false] - If true and if the free shipping method requires a coupon, this coupon will enable free shipping.
 * @property {number[]} product_categories - List of category IDs the coupon applies to.
 * @property {number[]} excluded_product_categories - List of category IDs the coupon does not apply to.
 * @property {boolean} [exclude_sale_items=false] - If true, this coupon will not be applied to items that have sale prices.
 * @property {string} minimum_amount - Minimum order amount that needs to be in the cart before coupon applies.
 * @property {string} maximum_amount - Maximum order amount allowed when using the coupon.
 * @property {Array<*>} email_restrictions - List of email addresses that can use this coupon.
 * @property {number[]} used_by - [READ-ONLY]List of user IDs (or guest email addresses) that have used the coupon.
 * @property {WooCommerce_CouponMetaData[]} meta_data - Meta data.
 */

/**
 * @typedef WooCommerce_CouponMetaData
 * @property {number} id - [READ-ONLY]Meta ID.
 * @property {string} key - Meta key.
 * @property {string} value - Meta value.
 */

/**
 * @typedef WooCommerce_Customer
 * @property {number} id - [READ-ONLY]Unique identifier for the resource.
 * @property {Date} date_created - [READ-ONLY]The date the customer was created, in the site's timezone.
 * @property {Date} date_created_gmt - [READ-ONLY]The date the customer was created, as GMT.
 * @property {Date} date_modified - [READ-ONLY]The date the customer was last modified, in the site's timezone.
 * @property {Date} date_modified_gmt - [READ-ONLY]The date the customer was last modified, as GMT.
 * @property {string} email - [MANDATORY]The email address for the customer.
 * @property {string} first_name - Customer first name.
 * @property {string} last_name - Customer last name.
 * @property {string} role - [READ-ONLY]Customer role.
 * @property {string} username - Customer login name.
 * @property {string} password - [WRITE-ONLY]Customer password.
 * @property {WooCommerce_CustomerBilling} billing - List of billing address data.
 * @property {WooCommerce_CustomerShipping} shipping - List of shipping address data.
 * @property {boolean} is_paying_customer - [READ-ONLY]Is the customer a paying customer?
 * @property {string} avatar_url - [READ-ONLY]Avatar URL.
 * @property {WooCommerce_CustomerMetaData[]} meta_data - Meta data.
 */

/**
 * @typedef WooCommerce_CustomerBilling
 * @property {string} first_name - First name.
 * @property {string} last_name - Last name.
 * @property {string} company - Company name.
 * @property {string} address_1 - Address line 1
 * @property {string} address_2 - Address line 2
 * @property {string} city - City name.
 * @property {string} state - ISO code or name of the state, province or district.
 * @property {string} postcode - Postal code.
 * @property {string} country - ISO code of the country.
 * @property {string} email - Email address.
 * @property {string} phone - Phone number.
 */

/**
 * @typedef WooCommerce_CustomerShipping
 * @property {string} first_name - First name.
 * @property {string} last_name - Last name.
 * @property {string} company - Company name.
 * @property {string} address_1 - Address line 1
 * @property {string} address_2 - Address line 2
 * @property {string} city - City name.
 * @property {string} state - ISO code or name of the state, province or district.
 * @property {string} postcode - Postal code.
 * @property {string} country - ISO code of the country.
 */

/**
 * @typedef WooCommerce_CustomerMetaData
 * @property {number} id - [READ-ONLY]Meta ID.
 * @property {string} key - Meta key.
 * @property {string} value - Meta value.
 */

/**
 * @typedef WooCommerce_CustomerDownloads
 * @property {string} download_id - [READ-ONLY]Download ID (MD5).
 * @property {string} download_url - [READ-ONLY]Download file URL.
 * @property {number} product_id - [READ-ONLY]Downloadable product ID.
 * @property {string} product_name - [READ-ONLY]Product name.
 * @property {string} download_name - [READ-ONLY]Downloadable file name.
 * @property {number} order_id - [READ-ONLY]Order ID.
 * @property {string} order_key - [READ-ONLY]Order key.
 * @property {string} downloads_remaining - [READ-ONLY]Number of downloads remaining.
 * @property {string} access_expires - [READ-ONLY]The date when download access expires, in the site's timezone.
 * @property {string} access_expires_gmt - [READ-ONLY]The date when download access expires, as GMT.
 * @property {WooCommerce_CustomerDownloadsFile} file - File details. READ-ONLY
 */

/**
 * @typedef WooCommerce_CustomerDownloadsFile
 * @property {string} name - [READ-ONLY]File name.
 * @property {string} file - [READ-ONLY]File URL.
 */

/**
 * @typedef WooCommerce_Order
 * @property {number} id - [READ-ONLY]Unique identifier for the resource.
 * @property {number} parent_id - Parent order ID.
 * @property {string} number - [READ-ONLY]Order number.
 * @property {string} order_key - [READ-ONLY]Order key.
 * @property {string} created_via - [READ-ONLY]Shows where the order was created.
 * @property {string} version - [READ-ONLY]Version of WooCommerce which last updated the order.
 * @property {'pending','processing','on-hold','completed','cancelled','refunded','failed','trash'} [status='pending'] - Order status.
 * @property {'AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BRL','BSD','BTC','BTN','BWP','BYR','BZD','CAD','CDF','CHF','CLP','CNY','COP','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','FKP','GBP','GEL','GGP','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','IMP','INR','IQD','IRR','IRT','ISK','JEP','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PRB','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','SSP','STD','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','USD','UYU','UZS','VEF','VND','VUV','WST','XAF','XCD','XOF','XPF','YER','ZAR','ZMW'} [currency='USD'] - Currency the order was created with, in ISO format.
 * @property {Date} date_created - [READ-ONLY]The date the order was created, in the site's timezone.
 * @property {Date} date_created_gmt - [READ-ONLY]The date the order was created, as GMT.
 * @property {Date} date_modified - [READ-ONLY]The date the order was last modified, in the site's timezone.
 * @property {Date} date_modified_gmt - [READ-ONLY]The date the order was last modified, as GMT.
 * @property {string} discount_total - [READ-ONLY]Total discount amount for the order.
 * @property {string} discount_tax - [READ-ONLY]Total discount tax amount for the order.
 * @property {string} shipping_total - [READ-ONLY]Total shipping amount for the order.
 * @property {string} shipping_tax - [READ-ONLY]Total shipping tax amount for the order.
 * @property {string} cart_tax - [READ-ONLY]Sum of line item taxes only.
 * @property {string} total - [READ-ONLY]Grand total.
 * @property {string} total_tax - [READ-ONLY]Sum of all taxes.
 * @property {boolean} prices_include_tax - [READ-ONLY]True the prices included tax during checkout.
 * @property {number} [customer_id='0'] - User ID who owns the order. 0 for guests.
 * @property {string} customer_ip_address - [READ-ONLY]Customer's IP address.
 * @property {string} customer_user_agent - [READ-ONLY]User agent of the customer.
 * @property {string} customer_note - Note left by customer during checkout.
 * @property {WooCommerce_OrderBilling} billing - Billing address.
 * @property {WooCommerce_OrderShipping} shipping - Shipping address.
 * @property {string} payment_method - Payment method ID.
 * @property {string} payment_method_title - Payment method title.
 * @property {string} transaction_id - Unique transaction ID.
 * @property {Date} date_paid - [READ-ONLY]The date the order was paid, in the site's timezone.
 * @property {Date} date_paid_gmt - [READ-ONLY]The date the order was paid, as GMT.
 * @property {Date} date_completed - [READ-ONLY]The date the order was completed, in the site's timezone.
 * @property {Date} date_completed_gmt - [READ-ONLY]The date the order was completed, as GMT.
 * @property {string} cart_hash - [READ-ONLY]MD5 hash of cart items to ensure orders are not modified.
 * @property {WooCommerce_OrderMetaData[]} meta_data - Meta data.
 * @property {WooCommerce_OrderLineItems[]} line_items - Line items data.
 * @property {WooCommerce_OrderTaxLines[]} tax_lines - [READ-ONLY]Tax lines data.
 * @property {WooCommerce_OrderShippingLines[]} shipping_lines - Shipping lines data.
 * @property {WooCommerce_OrderFeeLines[]} fee_lines - Fee lines data.
 * @property {WooCommerce_OrderCouponLines[]} coupon_lines - Coupons line data.
 * @property {WooCommerce_OrderRefunds[]} refunds - [READ-ONLY]List of refunds.
 * @property {boolean} [set_paid=false] - [WRITE-ONLY]Define if the order is paid. It will set the status to processing and reduce stock items.
 */

/**
 * @typedef WooCommerce_OrderBilling
 * @property {string} first_name - First name.
 * @property {string} last_name - Last name.
 * @property {string} company - Company name.
 * @property {string} address_1 - Address line 1
 * @property {string} address_2 - Address line 2
 * @property {string} city - City name.
 * @property {string} state - ISO code or name of the state, province or district.
 * @property {string} postcode - Postal code.
 * @property {string} country - Country code in ISO 3166-1 alpha-2 format.
 * @property {string} email - Email address.
 * @property {string} phone - Phone number.
 */

/**
 * @typedef WooCommerce_OrderShipping
 * @property {string} first_name - First name.
 * @property {string} last_name - Last name.
 * @property {string} company - Company name.
 * @property {string} address_1 - Address line 1
 * @property {string} address_2 - Address line 2
 * @property {string} city - City name.
 * @property {string} state - ISO code or name of the state, province or district.
 * @property {string} postcode - Postal code.
 * @property {string} country - Country code in ISO 3166-1 alpha-2 format.
 */

/**
 * @typedef WooCommerce_OrderMetaData
 * @property {number} id - [READ-ONLY]Meta ID.
 * @property {string} key - Meta key.
 * @property {string} value - Meta value.
 */

/**
 * @typedef WooCommerce_OrderLineItems
 * @property {number} id - [READ-ONLY]Item ID.
 * @property {string} name - Product name.
 * @property {number} product_id - Product ID.
 * @property {number} variation_id - Variation ID, if applicable.
 * @property {number} quantity - Quantity ordered.
 * @property {number} tax_class - Tax class of product.
 * @property {string} subtotal - Line subtotal (before discounts).
 * @property {string} subtotal_tax - [READ-ONLY]Line subtotal tax (before discounts).
 * @property {string} total - Line total (after discounts).
 * @property {string} total_tax - [READ-ONLY]Line total tax (after discounts).
 * @property {WooCommerce_OrderTaxes[]} taxes - [READ-ONLY]Line taxes.
 * @property {WooCommerce_OrderMetaData[]} meta_data - Meta data.
 * @property {string} sku - [READ-ONLY]Product SKU.
 * @property {string} price - [READ-ONLY]Product price.
 */

/**
 * @typedef WooCommerce_OrderTaxLines
 * @property {number} id - [READ-ONLY]Item ID.
 * @property {string} rate_code - [READ-ONLY]Tax rate code.
 * @property {string} rate_id - [READ-ONLY]Tax rate ID.
 * @property {string} label - [READ-ONLY]Tax rate label.
 * @property {boolean} compound - [READ-ONLY]Show if is a compound tax rate.
 * @property {string} tax_total - [READ-ONLY]Tax total (not including shipping taxes).
 * @property {string} shipping_tax_total - [READ-ONLY]Shipping tax total.
 * @property {WooCommerce_OrderMetaData[]} meta_data - Meta data.
 */

/**
 * @typedef WooCommerce_OrderShippingLines
 * @property {number} id - [READ-ONLY]Item ID.
 * @property {string} method_title - Shipping method name.
 * @property {string} method_id - Shipping method ID.
 * @property {string} total - Line total (after discounts).
 * @property {string} total_tax - [READ-ONLY]Line total tax (after discounts).
 * @property {WooCommerce_OrderTaxes[]} taxes - [READ-ONLY]Line taxes.
 * @property {WooCommerce_OrderMetaData[]} meta_data - Meta data.
 */

/**
 * @typedef WooCommerce_OrderFeeLines
 * @property {number} id - [READ-ONLY]Item ID.
 * @property {string} name - Fee name.
 * @property {string} tax_class - Tax class of fee.
 * @property {'taxable','none'} tax_status - Tax status of fee.
 * @property {string} total - Line total (after discounts).
 * @property {string} total_tax - [READ-ONLY]Line total tax (after discounts).
 * @property {WooCommerce_OrderTaxes[]} taxes - [READ-ONLY]Line taxes.
 * @property {WooCommerce_OrderMetaData[]} meta_data - Meta data.
 */

/**
 * @typedef WooCommerce_OrderCouponLines
 * @property {number} id - [READ-ONLY]Item ID.
 * @property {string} code - Coupon code.
 * @property {string} discount - [READ-ONLY]Discount total.
 * @property {string} discount_tax - [READ-ONLY]Discount total tax.
 * @property {WooCommerce_OrderMetaData[]} meta_data - Meta data.
 */

/**
 * @typedef WooCommerce_OrderRefunds
 * @property {number} id - [READ-ONLY]Refund ID.
 * @property {string} reason - [READ-ONLY]Refund reason.
 * @property {string} total - [READ-ONLY]Refund total.
 */

/**
 * @typedef WooCommerce_OrderTaxes
 * @property {number} id - [READ-ONLY]Item ID.
 * @property {string} rate_code - [READ-ONLY]Tax rate code.
 * @property {string} rate_id - [READ-ONLY]Tax rate ID.
 * @property {string} label - [READ-ONLY]Tax rate label.
 * @property {boolean} compound - [READ-ONLY]Show if is a compound tax rate.
 * @property {string} tax_total - [READ-ONLY]Tax total (not including shipping taxes).
 * @property {string} shipping_tax_total - [READ-ONLY]Shipping tax total.
 * @property {WooCommerce_OrderMetaData[]} meta_data - Meta data.
 */

/**
 * @typedef WooCommerce_OrderNote
 * @property {number} id - [READ-ONLY]Unique identifier for the resource.
 * @property {string} author - [READ-ONLY]Order note author.
 * @property {Date} date_created - [READ-ONLY]The date the order note was created, in the site's timezone.
 * @property {Date} date_created_gmt - [READ-ONLY]The date the order note was created, as GMT.
 * @property {string} note - [MANDATORY]Order note content.
 * @property {boolean} [customer_note=false] - If true, the note will be shown to customers and they will be notified. If false, the note will be for admin reference only.
 * @property {boolean} [added_by_user=false] - If true, this note will be attributed to the current user. If false, the note will be attributed to the system.
 */

/**
 * @typedef WooCommerce_OrderRefund
 * @property {number} id - [READ-ONLY]Unique identifier for the resource.
 * @property {Date} date_created - [READ-ONLY]The date the order refund was created, in the site's timezone.
 * @property {Date} date_created_gmt - [READ-ONLY]The date the order refund was created, as GMT.
 * @property {string} amount - Refund amount.
 * @property {string} reason - Reason for refund.
 * @property {number} refunded_by - User ID of user who created the refund.
 * @property {boolean} refunded_payment - [READ-ONLY]If the payment was refunded via the API. See api_refund.
 * @property {WooCommerce_OrderRefundMetaData[]} meta_data - Meta data.
 * @property {WooCommerce_OrderRefundLineItems[]} line_items - Line items data.
 * @property {boolean} [api_refund=true] - [WRITE-ONLY]When true, the payment gateway API is used to generate the refund.
 */

/**
 * @typedef WooCommerce_OrderRefundMetaData
 * @property {number} id - [READ-ONLY]Meta ID.
 * @property {string} key - Meta key.
 * @property {string} value - Meta value.
 */

/**
 * @typedef WooCommerce_OrderRefundLineItems
 * @property {number} id - [READ-ONLY]Item ID.
 * @property {string} name - Product name.
 * @property {number} product_id - Product ID.
 * @property {number} variation_id - Variation ID, if applicable.
 * @property {number} quantity - Quantity ordered.
 * @property {number} tax_class - Tax class of product.
 * @property {string} subtotal - Line subtotal (before discounts).
 * @property {string} subtotal_tax - [READ-ONLY]Line subtotal tax (before discounts).
 * @property {string} total - Line total (after discounts).
 * @property {string} total_tax - [READ-ONLY]Line total tax (after discounts).
 * @property {WooCommerce_OrderRefundLineItemTaxes[]} taxes - [READ-ONLY]Line taxes.
 * @property {WooCommerce_OrderRefundMetaData[]} meta_data - Meta data.
 * @property {string} sku - [READ-ONLY]Product SKU.
 * @property {string} price - [READ-ONLY]Product price.
 */

/**
 * @typedef WooCommerce_OrderRefundLineItemTaxes
 * @property {number} id - [READ-ONLY]Tax rate ID.
 * @property {string} total - [READ-ONLY]Tax total.
 * @property {string} subtotal - [READ-ONLY]Tax subtotal.
 */

/**
 * @typedef WooCommerce_Product
 * @property {number} id - [READ-ONLY]Unique identifier for the resource.
 * @property {string} name - Product name.
 * @property {string} slug - Product slug.
 * @property {string} permalink - [READ-ONLY]Product URL.
 * @property {Date} date_created - [READ-ONLY]The date the product was created, in the site's timezone.
 * @property {Date} date_created_gmt - [READ-ONLY]The date the product was created, as GMT.
 * @property {Date} date_modified - [READ-ONLY]The date the product was last modified, in the site's timezone.
 * @property {Date} date_modified_gmt - [READ-ONLY]The date the product was last modified, as GMT.
 * @property {'simple','grouped','external','variable'} [type='simple'] - Product type.
 * @property {'draft','pending','private','publish'} [status='publish'] - Product status (post status).
 * @property {boolean} [featured=false] - Featured product.
 * @property {'visible','catalog','search','hidden'} [catalog_visibility='visible'] - Catalog visibility.
 * @property {string} description - Product description.
 * @property {string} short_description - Product short description.
 * @property {string} sku - Unique identifier.
 * @property {string} price - [READ-ONLY]Current product price.
 * @property {string} regular_price - Product regular price.
 * @property {string} sale_price - Product sale price.
 * @property {Date} date_on_sale_from - Start date of sale price, in the site's timezone.
 * @property {Date} date_on_sale_from_gmt - Start date of sale price, as GMT.
 * @property {Date} date_on_sale_to - End date of sale price, in the site's timezone.
 * @property {Date} date_on_sale_to_gmt - End date of sale price, as GMT.
 * @property {string} price_html - [READ-ONLY]Price formatted in HTML.
 * @property {boolean} on_sale - [READ-ONLY]Shows if the product is on sale.
 * @property {boolean} purchasable - [READ-ONLY]Shows if the product can be bought.
 * @property {number} total_sales - [READ-ONLY]Amount of sales.
 * @property {boolean} [virtual=false] - If the product is virtual.
 * @property {boolean} [downloadable=false] - If the product is downloadable.
 * @property {WooCommerce_ProductDownloads[]} downloads - List of downloadable files.
 * @property {number} [download_limit='-1'] - Number of times downloadable files can be downloaded after purchase.
 * @property {number} [download_expiry='-1'] - Number of days until access to downloadable files expires.
 * @property {string} external_url - Product external URL. Only for external products.
 * @property {string} button_text - Product external button text. Only for external products.
 * @property {'taxable','shipping','none'} [tax_status='taxable'] - Tax status.
 * @property {string} tax_class - Tax class.
 * @property {boolean} [manage_stock=false] - Stock management at product level.
 * @property {number} stock_quantity - Stock quantity.
 * @property {'instock','outofstock','onbackorder'} [stock_status='instock'] - Controls the stock status of the product.
 * @property {'no','notify','yes'} [backorders='no'] - If managing stock, this controls if backorders are allowed.
 * @property {boolean} backorders_allowed - [READ-ONLY]Shows if backorders are allowed.
 * @property {boolean} backordered - [READ-ONLY]Shows if the product is on backordered.
 * @property {boolean} [sold_individually=false] - Allow one item to be bought in a single order.
 * @property {string} weight - Product weight.
 * @property {WooCommerce_ProductDimensions} dimensions - Product dimensions.
 * @property {boolean} shipping_required - [READ-ONLY]Shows if the product need to be shipped.
 * @property {boolean} shipping_taxable - [READ-ONLY]Shows whether or not the product shipping is taxable.
 * @property {string} shipping_class - Shipping class slug.
 * @property {number} shipping_class_id - [READ-ONLY]Shipping class ID.
 * @property {boolean} [reviews_allowed=true] - Allow reviews.
 * @property {string} average_rating - [READ-ONLY]Reviews average rating.
 * @property {number} rating_count - [READ-ONLY]Amount of reviews that the product have.
 * @property {number[]} related_ids - [READ-ONLY]List of related products IDs.
 * @property {number[]} upsell_ids - List of up-sell products IDs.
 * @property {number[]} cross_sell_ids - List of cross-sell products IDs.
 * @property {number} parent_id - Product parent ID.
 * @property {string} purchase_note - Optional note to send the customer after purchase.
 * @property {WooCommerce_ProductCategories[]} categories - List of categories.
 * @property {WooCommerce_ProductTags[]} tags - List of tags.
 * @property {WooCommerce_ProductImages[]} images - List of images.
 * @property {WooCommerce_ProductAttributes[]} attributes - List of attributes.
 * @property {WooCommerce_ProductDefaultAttributes[]} default_attributes - Defaults variation attributes.
 * @property {number[]} variations - [READ-ONLY]List of variations IDs.
 * @property {number[]} grouped_products - List of grouped products ID.
 * @property {number} menu_order - Menu order, used to custom sort products.
 * @property {WooCommerce_ProductMetaData[]} meta_data - Meta data.
 */

/**
 * @typedef WooCommerce_ProductDownloads
 * @property {string} id - File ID.
 * @property {string} name - File name.
 * @property {string} file - File URL.
 */

/**
 * @typedef WooCommerce_ProductDimensions
 * @property {string} length - Product length.
 * @property {string} width - Product width.
 * @property {string} height - Product height.
 */

/**
 * @typedef WooCommerce_ProductCategories
 * @property {number} id - Category ID.
 * @property {string} name - [READ-ONLY]Category name.
 * @property {string} slug - [READ-ONLY]Category slug.
 */

/**
 * @typedef WooCommerce_ProductTags
 * @property {number} id - Tag ID.
 * @property {string} name - [READ-ONLY]Tag name.
 * @property {string} slug - [READ-ONLY]Tag slug.
 */

/**
 * @typedef WooCommerce_ProductImages
 * @property {number} id - Image ID.
 * @property {Date} date_created - [READ-ONLY]The date the image was created, in the site's timezone.
 * @property {Date} date_created_gmt - [READ-ONLY]The date the image was created, as GMT.
 * @property {Date} date_modified - [READ-ONLY]The date the image was last modified, in the site's timezone.
 * @property {Date} date_modified_gmt - [READ-ONLY]The date the image was last modified, as GMT.
 * @property {string} src - Image URL.
 * @property {string} name - Image name.
 * @property {string} alt - Image alternative text.
 */

/**
 * @typedef WooCommerce_ProductAttributes
 * @property {number} id - Attribute ID.
 * @property {string} name - Attribute name.
 * @property {number} position - Attribute position.
 * @property {boolean} [visible=false] - Define if the attribute is visible on the "Additional information" tab in the product's page.
 * @property {boolean} [variation=false] - Define if the attribute can be used as variation.
 * @property {Array<*>} options - List of available term names of the attribute.
 */

/**
 * @typedef WooCommerce_ProductDefaultAttributes
 * @property {number} id - Attribute ID.
 * @property {string} name - Attribute name.
 * @property {string} option - Selected attribute term name.
 */

/**
 * @typedef WooCommerce_ProductMetaData
 * @property {number} id - [READ-ONLY]Meta ID.
 * @property {string} key - Meta key.
 * @property {string} value - Meta value.
 */

/**
 * @typedef WooCommerce_ProductVariation
 * @property {number} id - [READ-ONLY]Unique identifier for the resource.
 * @property {Date} date_created - [READ-ONLY]The date the variation was created, in the site's timezone.
 * @property {Date} date_created_gmt - [READ-ONLY]The date the variation was created, as GMT.
 * @property {Date} date_modified - [READ-ONLY]The date the variation was last modified, in the site's timezone.
 * @property {Date} date_modified_gmt - [READ-ONLY]The date the variation was last modified, as GMT.
 * @property {string} description - Variation description.
 * @property {string} permalink - [READ-ONLY]Variation URL.
 * @property {string} sku - Unique identifier.
 * @property {string} price - [READ-ONLY]Current variation price.
 * @property {string} regular_price - Variation regular price.
 * @property {string} sale_price - Variation sale price.
 * @property {Date} date_on_sale_from - Start date of sale price, in the site's timezone.
 * @property {Date} date_on_sale_from_gmt - Start date of sale price, as GMT.
 * @property {Date} date_on_sale_to - End date of sale price, in the site's timezone.
 * @property {Date} date_on_sale_to_gmt - End date of sale price, as GMT.
 * @property {boolean} on_sale - [READ-ONLY]Shows if the variation is on sale.
 * @property {'draft','pending','private','publish'} [status='publish'] - Variation status.
 * @property {boolean} purchasable - [READ-ONLY]Shows if the variation can be bought.
 * @property {boolean} [virtual=false] - If the variation is virtual.
 * @property {boolean} [downloadable=false] - If the variation is downloadable.
 * @property {WooCommerce_ProductVariationDownloads[]} downloads - List of downloadable files.
 * @property {number} [download_limit='-1'] - Number of times downloadable files can be downloaded after purchase.
 * @property {number} [download_expiry='-1'] - Number of days until access to downloadable files expires.
 * @property {'taxable','shipping','none'} [tax_status='taxable'] - Tax status.
 * @property {string} tax_class - Tax class.
 * @property {boolean} [manage_stock=false] - Stock management at variation level.
 * @property {number} stock_quantity - Stock quantity.
 * @property {'instock','outofstock','onbackorder'} [stock_status='instock'] - Controls the stock status of the product.
 * @property {'no','notify','yes'} [backorders='no'] - If managing stock, this controls if backorders are allowed.
 * @property {boolean} backorders_allowed - [READ-ONLY]Shows if backorders are allowed.
 * @property {boolean} backordered - [READ-ONLY]Shows if the variation is on backordered.
 * @property {string} weight - Variation weight.
 * @property {WooCommerce_ProductVariationDimensions} dimensions - Variation dimensions.
 * @property {string} shipping_class - Shipping class slug.
 * @property {string} shipping_class_id - [READ-ONLY]Shipping class ID.
 * @property {WooCommerce_ProductVariationImage} image - Variation image data.
 * @property {WooCommerce_ProductVariationAttributes[]} attributes - List of attributes.
 * @property {number} menu_order - Menu order, used to custom sort products.
 * @property {WooCommerce_ProductVariationMetaData[]} meta_data - Meta data.
 */

/**
 * @typedef WooCommerce_ProductVariationDownloads
 * @property {string} id - File ID.
 * @property {string} name - File name.
 * @property {string} file - File URL.
 */

/**
 * @typedef WooCommerce_ProductVariationDimensions
 * @property {string} length - Variation length.
 * @property {string} width - Variation width.
 * @property {string} height - Variation height.
 */

/**
 * @typedef WooCommerce_ProductVariationImage
 * @property {number} id - Image ID.
 * @property {Date} date_created - [READ-ONLY]The date the image was created, in the site's timezone.
 * @property {Date} date_created_gmt - [READ-ONLY]The date the image was created, as GMT.
 * @property {Date} date_modified - [READ-ONLY]The date the image was last modified, in the site's timezone.
 * @property {Date} date_modified_gmt - [READ-ONLY]The date the image was last modified, as GMT.
 * @property {string} src - Image URL.
 * @property {string} name - Image name.
 * @property {string} alt - Image alternative text.
 */

/**
 * @typedef WooCommerce_ProductVariationAttributes
 * @property {number} id - Attribute ID.
 * @property {string} name - Attribute name.
 * @property {string} option - Selected attribute term name.
 */

/**
 * @typedef WooCommerce_ProductVariationMetaData
 * @property {number} id - [READ-ONLY]Meta ID.
 * @property {string} key - Meta key.
 * @property {string} value - Meta value.
 */

/**
 * @typedef WooCommerce_ProductAttribute
 * @property {number} id - [READ-ONLY]Unique identifier for the resource.
 * @property {string} name - [MANDATORY]Attribute name.
 * @property {string} slug - An alphanumeric identifier for the resource unique to its type.
 * @property {string} type - Type of attribute. By default only select is supported.
 * @property {'menu_order','name','name_num','id'} [order_by='menu_order'] - Default sort order.
 * @property {boolean} [has_archives=false] - Enable/Disable attribute archives.
 */

/**
 * @typedef WooCommerce_ProductAttributeTerm
 * @property {number} id - [READ-ONLY]Unique identifier for the resource.
 * @property {string} name - [MANDATORY]Term name.
 * @property {string} slug - An alphanumeric identifier for the resource unique to its type.
 * @property {string} description - HTML description of the resource.
 * @property {number} menu_order - Menu order, used to custom sort the resource.
 * @property {number} count - [READ-ONLY]Number of published products for the resource.
 */

/**
 * @typedef WooCommerce_ProductCategory
 * @property {number} id - [READ-ONLY]Unique identifier for the resource.
 * @property {string} name - [MANDATORY]Category name.
 * @property {string} slug - An alphanumeric identifier for the resource unique to its type.
 * @property {number} parent - The ID for the parent of the resource.
 * @property {string} description - HTML description of the resource.
 * @property {'default','products','subcategories','both'} [display='default'] - Category archive display type.
 * @property {WooCommerce_ProductCategoryImage} image - Image data.
 * @property {number} menu_order - Menu order, used to custom sort the resource.
 * @property {number} count - [READ-ONLY]Number of published products for the resource.
 */

/**
 * @typedef WooCommerce_ProductCategoryImage
 * @property {number} id - Image ID.
 * @property {Date} date_created - [READ-ONLY]The date the image was created, in the site's timezone.
 * @property {Date} date_created_gmt - [READ-ONLY]The date the image was created, as GMT
 * @property {Date} date_modified - [READ-ONLY]The date the image was last modified, in the site's timezone.
 * @property {Date} date_modified_gmt - [READ-ONLY]The date the image was last modified, as GMT.
 * @property {string} src - Image URL.
 * @property {string} name - Image name.
 * @property {string} alt - Image alternative text.
 */

/**
 * @typedef WooCommerce_ProductShippingClass
 * @property {number} id - [READ-ONLY]Unique identifier for the resource.
 * @property {string} name - [MANDATORY]Shipping class name.
 * @property {string} slug - An alphanumeric identifier for the resource unique to its type.
 * @property {string} description - HTML description of the resource.
 * @property {number} count - [READ-ONLY]Number of published products for the resource.
 */

/**
 * @typedef WooCommerce_ProductTag
 * @property {number} id - [READ-ONLY]Unique identifier for the resource.
 * @property {string} name - [MANDATORY]Tag name.
 * @property {string} slug - An alphanumeric identifier for the resource unique to its type.
 * @property {string} description - HTML description of the resource.
 * @property {number} count - [READ-ONLY]Number of published products for the resource.
 */

/**
 * @typedef WooCommerce_ProductReview
 * @property {number} id - [READ-ONLY]Unique identifier for the resource.
 * @property {string} date_created - [READ-ONLY]The date the review was created, in the site's timezone.
 * @property {string} date_created_gmt - [READ-ONLY]The date the review was created, as GMT.
 * @property {number} product_id - Unique identifier for the product that the review belongs to.
 * @property {'approved','hold','spam','unspam','trash','untrash'} status - Status of the review. Defauls to approved.
 * @property {string} reviewer - Reviewer name.
 * @property {string} reviewer_email - Reviewer email.
 * @property {string} review - The content of the review.
 * @property {number} rating - Review rating (0 to 5).
 * @property {boolean} verified - Shows if the reviewer bought the product or not.
 */

/**
 * @typedef WooCommerce_SalesReport
 * @property {string} total_sales - [READ-ONLY]Gross sales in the period.
 * @property {string} net_sales - [READ-ONLY]Net sales in the period.
 * @property {string} average_sales - [READ-ONLY]Average net daily sales.
 * @property {number} total_orders - [READ-ONLY]Total of orders placed.
 * @property {number} total_items - [READ-ONLY]Total of items purchased.
 * @property {string} total_tax - [READ-ONLY]Total charged for taxes.
 * @property {string} total_shipping - [READ-ONLY]Total charged for shipping.
 * @property {number} total_refunds - [READ-ONLY]Total of refunded orders.
 * @property {number} total_discount - [READ-ONLY]Total of coupons used.
 * @property {string} totals_grouped_by - [READ-ONLY]Group type.
 * @property {Array<*>} totals - [READ-ONLY]Totals.
 */

/**
 * @typedef WooCommerce_TopSellersReport
 * @property {string} title - [READ-ONLY]Product title.
 * @property {number} product_id - [READ-ONLY]Product ID.
 * @property {number} quantity - [READ-ONLY]Total number of purchases.
 */

/**
 * @typedef WooCommerce_CouponsTotals
 * @property {string} slug - [READ-ONLY]An alphanumeric identifier for the resource.
 * @property {string} name - [READ-ONLY]Coupon type name.
 * @property {string} total - [READ-ONLY]Amount of coupons.
 */

/**
 * @typedef WooCommerce_CustomersTotals
 * @property {string} slug - [READ-ONLY]An alphanumeric identifier for the resource.
 * @property {string} name - [READ-ONLY]Customer type name.
 * @property {string} total - [READ-ONLY]Amount of customers.
 */

/**
 * @typedef WooCommerce_OrdersTotals
 * @property {string} slug - [READ-ONLY]An alphanumeric identifier for the resource.
 * @property {string} name - [READ-ONLY]Orders status name.
 * @property {string} total - [READ-ONLY]Amount of orders.
 */

/**
 * @typedef WooCommerce_ProductsTotals
 * @property {string} slug - [READ-ONLY]An alphanumeric identifier for the resource.
 * @property {string} name - [READ-ONLY]Product type name.
 * @property {string} total - [READ-ONLY]Amount of products.
 */

/**
 * @typedef WooCommerce_ReviewsTotals
 * @property {string} slug - [READ-ONLY]An alphanumeric identifier for the resource.
 * @property {string} name - [READ-ONLY]Review type name.
 * @property {string} total - [READ-ONLY]Amount of reviews.
 */

/**
 * @typedef WooCommerce_TaxRate
 * @property {number} id - [READ-ONLY]Unique identifier for the resource.
 * @property {string} country - Country ISO 3166 code. See ISO 3166 Codes (Countries) for more details
 * @property {string} state - State code.
 * @property {string} postcode - Postcode/ZIP.
 * @property {string} city - City name.
 * @property {string} rate - Tax rate.
 * @property {string} name - Tax rate name.
 * @property {number} [priority='1'] - Tax priority. Only 1 matching rate per priority will be used. To define multiple tax rates for a single area you need to specify a different priority per rate.
 * @property {boolean} [compound=false] - Whether or not this is a compound rate. Compound tax rates are applied on top of other tax rates.
 * @property {boolean} [shipping=true] - Whether or not this tax rate also gets applied to shipping.
 * @property {number} order - Indicates the order that will appear in queries.
 * @property {string} [class='standard'] - Tax class.
 */

/**
 * @typedef WooCommerce_TaxClass
 * @property {string} slug - [READ-ONLY]Unique identifier for the resource.
 * @property {string} name - [REQUIRED]Tax class name.
 */

/**
 * @typedef WooCommerce_Webhook
 * @property {number} id - [READ-ONLY]Unique identifier for the resource.
 * @property {string} name - A friendly name for the webhook.
 * @property {'active','paused','disabled'} [status='active'] - Webhook status.
 * @property {string} topic - [MANDATORY]Webhook topic.
 * @property {string} resource - [READ-ONLY]Webhook resource.
 * @property {string} event - [READ-ONLY]Webhook event.
 * @property {Array<*>} hooks - [READ-ONLY]WooCommerce action names associated with the webhook.
 * @property {string} delivery_url - [MANDATORY][READ-ONLY]The URL where the webhook payload is delivered.
 * @property {string} secret - Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default is a MD5 hash from the current user's ID
 * @property {Date} date_created - [READ-ONLY]The date the webhook was created, in the site's timezone.
 * @property {Date} date_created_gmt - [READ-ONLY]The date the webhook was created, as GMT.
 * @property {Date} date_modified - [READ-ONLY]The date the webhook was last modified, in the site's timezone.
 * @property {Date} date_modified_gmt - [READ-ONLY]The date the webhook was last modified, as GMT.
 */

/**
 * @typedef WooCommerce_SettingGroup
 * @property {string} id - [READ-ONLY]A unique identifier that can be used to link settings together.
 * @property {string} label - [READ-ONLY]A human readable label for the setting used in interfaces.
 * @property {string} description - [READ-ONLY]A human readable description for the setting used in interfaces.
 * @property {string} parent_id - [READ-ONLY]ID of parent grouping.
 * @property {string} sub_groups - [READ-ONLY]IDs for settings sub groups.
 */

/**
 * @typedef WooCommerce_SettingOption
 * @property {string} id - [READ-ONLY]A unique identifier for the setting.
 * @property {string} label - [READ-ONLY]A human readable label for the setting used in interfaces.
 * @property {string} description - [READ-ONLY]A human readable description for the setting used in interfaces.
 * @property {*} value - Setting value.
 * @property {*} default - [READ-ONLY]Default value for the setting.
 * @property {string} tip - [READ-ONLY]Additional help text shown to the user about the setting.
 * @property {string} placeholder - [READ-ONLY]Placeholder text to be displayed in text inputs.
 * @property {'text','email','number','color','password','textarea','select','multiselect','radio','image_width','checkbox'} type - [READ-ONLY]Type of setting.
 * @property {object} options - [READ-ONLY]Array of options (key value pairs) for inputs such as select, multiselect, and radio buttons.
 * @property {string} group_id - [READ-ONLY]An identifier for the group this setting belongs to.
 */

/**
 * @typedef WooCommerce_PaymentGateway
 * @property {string} id - [READ-ONLY]Payment gateway ID.
 * @property {string} title - Payment gateway title on checkout.
 * @property {string} description - Payment gateway description on checkout.
 * @property {number} order - Payment gateway sort order.
 * @property {boolean} enabled - Payment gateway enabled status.
 * @property {string} method_title - [READ-ONLY]Payment gateway method title.
 * @property {string} method_description - [READ-ONLY]Payment gateway method description.
 * @property {Array<*>} method_supports - [READ-ONLY]Supported features for this payment gateway.
 * @property {WooCommerce_PaymentGatewaySettings} settings - Payment gateway settings.
 */

/**
 * @typedef WooCommerce_PaymentGatewaySettings
 * @property {string} id - [READ-ONLY]A unique identifier for the setting.
 * @property {string} label - [READ-ONLY]A human readable label for the setting used in interfaces.
 * @property {string} description - [READ-ONLY]A human readable description for the setting used in interfaces.
 * @property {'text','email','number','color','password','textarea','select','multiselect','radio','image_width','checkbox'} type - [READ-ONLY]Type of setting.
 * @property {string} value - Setting value.
 * @property {string} default - [READ-ONLY]Default value for the setting.
 * @property {string} tip - [READ-ONLY]Additional help text shown to the user about the setting.
 * @property {string} placeholder - [READ-ONLY]Placeholder text to be displayed in text inputs.
 */

/**
 * @typedef WooCommerce_ShippingZone
 * @property {number} id - [READ-ONLY]Unique identifier for the resource.
 * @property {string} name - [MANDATORY]Shipping zone name.
 * @property {number} order - Shipping zone order.
 */

/**
 * @typedef WooCommerce_ShippingLocation
 * @property {string} code - Shipping zone location code.
 * @property {'postcode','state','country','continent'} [type='country'] - Shipping zone location type.
 */

/**
 * @typedef WooCommerce_ShippingMethod
 * @property {number} instance_id - [READ-ONLY]Shipping method instance ID.
 * @property {string} title - [READ-ONLY]Shipping method customer facing title.
 * @property {number} order - Shipping method sort order.
 * @property {boolean} enabled - Shipping method enabled status.
 * @property {string} method_id - [MANDATORY][READ-ONLY]Shipping method ID.
 * @property {string} method_title - [READ-ONLY]Shipping method title.
 * @property {string} method_description - [READ-ONLY]Shipping method description.
 * @property {WooCommerce_ShippingMethodSettings} settings - Shipping method settings.
 */

/**
 * @typedef WooCommerce_ShippingMethodSettings
 * @property {string} id - [READ-ONLY]A unique identifier for the setting.
 * @property {string} label - [READ-ONLY]A human readable label for the setting used in interfaces.
 * @property {string} description - [READ-ONLY]A human readable description for the setting used in interfaces.
 * @property {'text','email','number','color','password','textarea','select','multiselect','radio','image_width','checkbox'} type - [READ-ONLY]Type of setting.
 * @property {string} value - Setting value.
 * @property {string} default - [READ-ONLY]Default value for the setting.
 * @property {string} tip - [READ-ONLY]Additional help text shown to the user about the setting.
 * @property {string} placeholder - [READ-ONLY]Placeholder text to be displayed in text inputs.
 */

/**
 * @typedef WooCommerce_ShippingMethod
 * @property {string} id - [READ-ONLY]Method ID.
 * @property {string} title - [READ-ONLY]Shipping method title.
 * @property {string} description - [READ-ONLY]Shipping method description.
 */

/**
 * @typedef WooCommerce_SystemStatus
 * @property {WooCommerce_SystemStatusEnvironment} environment - [READ-ONLY]Environment.
 * @property {WooCommerce_SystemStatusDatabase} database - [READ-ONLY]Database.
 * @property {Array<*>} active_plugins - [READ-ONLY]Active plugins.
 * @property {WooCommerce_SystemStatusTheme} theme - [READ-ONLY]Theme.
 * @property {WooCommerce_SystemStatusSettings} settings - [READ-ONLY]Settings.
 * @property {WooCommerce_SystemStatusSecurity} security - [READ-ONLY]Security.
 * @property {Array<*>} pages - [READ-ONLY]WooCommerce pages.
 */

/**
 * @typedef WooCommerce_SystemStatusEnvironment
 * @property {string} home_url - [READ-ONLY]Home URL.
 * @property {string} site_url - [READ-ONLY]Site URL.
 * @property {string} wc_version - [READ-ONLY]WooCommerce version.
 * @property {string} log_directory - [READ-ONLY]Log directory.
 * @property {boolean} log_directory_writable - [READ-ONLY]Is log directory writable?
 * @property {string} wp_version - [READ-ONLY]WordPress version.
 * @property {boolean} wp_multisite - [READ-ONLY]Is WordPress multisite?
 * @property {number} wp_memory_limit - [READ-ONLY]WordPress memory limit.
 * @property {boolean} wp_debug_mode - [READ-ONLY]Is WordPress debug mode active?
 * @property {boolean} wp_cron - [READ-ONLY]Are WordPress cron jobs enabled?
 * @property {string} language - [READ-ONLY]WordPress language.
 * @property {string} server_info - [READ-ONLY]Server info.
 * @property {string} php_version - [READ-ONLY]PHP version.
 * @property {number} php_post_max_size - [READ-ONLY]PHP post max size.
 * @property {number} php_max_execution_time - [READ-ONLY]PHP max execution time.
 * @property {number} php_max_input_vars - [READ-ONLY]PHP max input vars.
 * @property {string} curl_version - [READ-ONLY]cURL version.
 * @property {boolean} suhosin_installed - [READ-ONLY]Is SUHOSIN installed?
 * @property {number} max_upload_size - [READ-ONLY]Max upload size.
 * @property {string} mysql_version - [READ-ONLY]MySQL version.
 * @property {string} default_timezone - [READ-ONLY]Default timezone.
 * @property {boolean} fsockopen_or_curl_enabled - [READ-ONLY]Is fsockopen/cURL enabled?
 * @property {boolean} soapclient_enabled - [READ-ONLY]Is SoapClient class enabled?
 * @property {boolean} domdocument_enabled - [READ-ONLY]Is DomDocument class enabled?
 * @property {boolean} gzip_enabled - [READ-ONLY]Is GZip enabled?
 * @property {boolean} mbstring_enabled - [READ-ONLY]Is mbstring enabled?
 * @property {boolean} remote_post_successful - [READ-ONLY]Remote POST successful?
 * @property {string} remote_post_response - [READ-ONLY]Remote POST response.
 * @property {boolean} remote_get_successful - [READ-ONLY]Remote GET successful?
 * @property {string} remote_get_response - [READ-ONLY]Remote GET response.
 */

/**
 * @typedef WooCommerce_SystemStatusDatabase
 * @property {string} wc_database_version - [READ-ONLY]WC database version.
 * @property {string} database_prefix - [READ-ONLY]Database prefix.
 * @property {string} maxmind_geoip_database - [READ-ONLY]MaxMind GeoIP database.
 * @property {Array<*>} database_tables - [READ-ONLY]Database tables.
 */

/**
 * @typedef WooCommerce_SystemStatusTheme
 * @property {string} name - [READ-ONLY]Theme name.
 * @property {string} version - [READ-ONLY]Theme version.
 * @property {string} version_latest - [READ-ONLY]Latest version of theme.
 * @property {string} author_url - [READ-ONLY]Theme author URL.
 * @property {boolean} is_child_theme - [READ-ONLY]Is this theme a child theme?
 * @property {boolean} has_woocommerce_support - [READ-ONLY]Does the theme declare WooCommerce support?
 * @property {boolean} has_woocommerce_file - [READ-ONLY]Does the theme have a woocommerce.php file?
 * @property {boolean} has_outdated_templates - [READ-ONLY]Does this theme have outdated templates?
 * @property {Array<*>} overrides - [READ-ONLY]Template overrides.
 * @property {string} parent_name - [READ-ONLY]Parent theme name.
 * @property {string} parent_version - [READ-ONLY]Parent theme version.
 * @property {string} parent_author_url - [READ-ONLY]Parent theme author URL.
 */

/**
 * @typedef WooCommerce_SystemStatusSettings
 * @property {boolean} api_enabled - [READ-ONLY]REST API enabled?
 * @property {boolean} force_ssl - [READ-ONLY]SSL forced?
 * @property {string} currency - [READ-ONLY]Currency.
 * @property {string} currency_symbol - [READ-ONLY]Currency symbol.
 * @property {string} currency_position - [READ-ONLY]Currency position.
 * @property {string} thousand_separator - [READ-ONLY]Thousand separator.
 * @property {string} decimal_separator - [READ-ONLY]Decimal separator.
 * @property {number} number_of_decimals - [READ-ONLY]Number of decimals.
 * @property {boolean} geolocation_enabled - [READ-ONLY]Geolocation enabled?
 * @property {Array<*>} taxonomies - [READ-ONLY]Taxonomy terms for product/order statuses.
 */

/**
 * @typedef WooCommerce_SystemStatusSecurity
 * @property {boolean} secure_connection - [READ-ONLY]Is the connection to your store secure?
 * @property {boolean} hide_errors - [READ-ONLY]Hide errors from visitors?
 */

/**
 * @typedef WooCommerce_SystemStatusTool
 * @property {string} id - [READ-ONLY]A unique identifier for the tool.
 * @property {string} name - [READ-ONLY]Tool name.
 * @property {string} action - [READ-ONLY]What running the tool will do.
 * @property {string} description - [READ-ONLY]Tool description.
 * @property {boolean} success - [READ-ONLY][WRITE-ONLY]Did the tool run successfully?
 * @property {string} message - [READ-ONLY][WRITE-ONLY]Tool return message.
 * @property {boolean} [confirm=false] - [WRITE-ONLY]Confirm execution of the tool.
 */

/**
 * @typedef WooCommerce_Data
 * @property {string} slug - [READ-ONLY]Data resource ID.
 * @property {string} description - [READ-ONLY]Data resource description.
 */

/**
 * @typedef WooCommerce_Continents
 * @property {string} code - [READ-ONLY]2 character continent code.
 * @property {string} name - [READ-ONLY]Full name of continent.
 * @property {WooCommerce_ContinentsCountries[]} countries - [READ-ONLY]List of countries on this continent.
 */

/**
 * @typedef WooCommerce_ContinentsCountries
 * @property {string} code - [READ-ONLY]ISO3166 alpha-2 country code.
 * @property {string} currency_code - [READ-ONLY]Default ISO4127 alpha-3 currency code for the country.
 * @property {string} currency_pos - [READ-ONLY]Currency symbol position for this country.
 * @property {string} decimal_sep - [READ-ONLY]Decimal separator for displayed prices for this country.
 * @property {string} dimension_unit - [READ-ONLY]The unit lengths are defined in for this country.
 * @property {string} name - [READ-ONLY]Full name of country.
 * @property {number} num_decimals - [READ-ONLY]Number of decimal points shown in displayed prices for this country.
 * @property {WooCommerce_ContinentsCountriesStates[]} states - [READ-ONLY]List of states in this country.
 * @property {string} thousand_sep - [READ-ONLY]Thousands separator for displayed prices in this country.
 * @property {string} weight_unit - [READ-ONLY]The unit weights are defined in for this country.
 */

/**
 * @typedef WooCommerce_ContinentsCountriesStates
 * @property {string} code - [READ-ONLY]State code.
 * @property {string} name - [READ-ONLY]Full name of state.
 */

/**
 * @typedef WooCommerce_Countries
 * @property {string} code - [READ-ONLY]ISO3166 alpha-2 country code.
 * @property {string} name - [READ-ONLY]Full name of country.
 * @property {WooCommerce_CountriesStates[]} states - [READ-ONLY]List of states in this country.
 */

/**
 * @typedef WooCommerce_CountriesStates
 * @property {string} code - [READ-ONLY]State code.
 * @property {string} name - [READ-ONLY]Full name of state.
 */

/**
 * @typedef WooCommerce_Currencies
 * @property {string} code - [READ-ONLY]ISO4217 currency code.
 * @property {string} name - [READ-ONLY]Full name of currency.
 * @property {string} symbol - [READ-ONLY]Currency symbol.
 */