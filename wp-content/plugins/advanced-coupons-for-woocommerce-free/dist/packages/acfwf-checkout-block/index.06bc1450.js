import{g as m,s as _,c as u,i as x,r as y,a as k}from"../../common/NoticesPlugin.58041a5d.js";/* empty css                         */function D(){import.meta.url,import("_").catch(()=>1);async function*t(){}}function C(){const{OrderSummarySubtotalBlock:t}=acfwfObj.components,{store_credits:c}=m(u.integration),{pay_with_store_credits_text:o}=c,{acfwf_block:e}=_.getCartData().extensions;if(e&&e.store_credits&&e.store_credits.amount){const{amount_text:r}=e.store_credits;return React.createElement(t,{label:o,value:r})}return null}const S=t=>{const{adminAjaxUrl:c}=acfwfObj,{dummyUpdateCart:o}=acfwfObj.wc,{setButtonDisabled:e,amount:r,setAmount:a,redeem_nonce:n}=t,{dispatch:s}=wp.data;e(!0),jQuery.post(c,{action:"acfwf_redeem_store_credits",amount:r,wpnonce:n,is_cart_checkout_block:!0},function(l){o(),a(""),s("core/notices").createNotice(l.status,l.message,{type:"snackbar",context:"wc/checkout"}),setTimeout(()=>{e(!1)},200)})};function N(){const{Accordion:t}=acfwfObj.components,{useState:c}=wp.element,{caret_img_src:o,store_credits:e}=m(u.integration),{button_text:r,redeem_nonce:a,hide_store_credits_on_zero_balance:n}=e,{balance_text:s,instructions:l,placeholder:p}=e.labels,{toggle_text:w}=e.labels,[d,f]=c(""),[b,g]=c(!1),{acfwf_block:i}=_.getCartData().extensions;if(!i||!i.store_credits)return null;const{balance:E,balance_text:R}=i.store_credits;return!E&&n==="yes"?null:React.createElement("div",{className:"acfwf-components acfw-checkout-ui-block"},React.createElement(t,{title:w,caret_img_src:o},React.createElement("div",null,React.createElement("p",{className:"acfw-store-credit-user-balance"},React.createElement("div",{dangerouslySetInnerHTML:{__html:s.replace("%s","<strong>".concat(R,"</strong>"))}})),React.createElement("p",{className:"acfw-store-credit-instructions"},l),React.createElement("div",{id:"acfw_redeem_store_credit",className:"acfw-redeem-store-credit-form-field acfw-checkout-form-button-field "},React.createElement("p",{className:"form-row form-row-first acfw-form-control-wrapper acfw-col-left-half wfacp-input-form"},React.createElement("label",{htmlFor:"coupon_code"}),React.createElement("input",{type:"text",className:"input-text wc_input_price ",value:d,placeholder:p,onChange:h=>{f(h.target.value)}})),React.createElement("p",{className:"form-row form-row-last acfw-col-left-half acfw_coupon_btn_wrap"},React.createElement("label",{className:"acfw-form-control-label"}," "),React.createElement("button",{type:"button",className:"button alt",onClick:()=>S({setButtonDisabled:g,amount:d,setAmount:f,redeem_nonce:a}),disabled:b},r))))))}function v(){const{ExperimentalDiscountsMeta:t,ExperimentalOrderMeta:c}=wc.blocksCheckout,{registerPlugin:o}=wp.plugins,{store_credits:e}=m(u.integration),{apply_type:r,display_store_credits_redeem_form:a,store_credits_module:n,is_allow_store_credits:s}=e;n&&a==="yes"&&s&&(o("acfw-store-credit-discount-form",{render:()=>React.createElement(c,null,React.createElement(N,null)),scope:"woocommerce-checkout"}),r!=="coupon"&&o("acfw-store-credit-discount-row",{render:()=>React.createElement(t,null,React.createElement(C,null)),scope:"woocommerce-checkout"}))}x();y();k();v();export{D as __vite_legacy_guard};