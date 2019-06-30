import React, { Component } from "react";
import SocialIcon from "./icons/Socialcon";
import styled from "styled-components";

class Icon extends Component {
  static defaultProps = {
    color: "#1f1f1f",
  };
  render() {
    switch (this.props.name) {
      case "arrowDown":
        return (
          <StyledIcon viewBox="128 192 256 128" fill={this.props.color}>
            <path d="M128 192l128 128 128-128z" />
          </StyledIcon>
        );
      case "arrowRight":
        return (
          <svg viewBox="0 0 512 512" fill={this.props.color}>
            <path d="M192 128l128 128-128 128z" />
          </svg>
        );
      case "arrowLeft":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill={this.props.color}
          >
            <path d="M320 128L192 256l128 128z" />
          </svg>
        );
      case "externalSite":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"
              // fill={this.props.color}
            />
          </svg>
        );
      case "code":
        return (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.875 27.6641L7.17969 20L14.8672 12.3359L12.5234 10L2.5 20L12.5312 30L14.875 27.6641ZM25.125 27.6641L32.8125 20L25.125 12.3359L27.4688 10L37.5 20L27.4688 30L25.125 27.6641Z" />
            <path d="M12.1562 21.5625H15.2812V18.4375H12.1562V21.5625ZM27.8437 18.4375H24.7187V21.5625H27.8437V18.4375ZM18.4375 21.5625H21.5625V18.4375H18.4375V21.5625Z" />
          </svg>
        );
      case "NavLogo":
        return (
          <svg
            width="48"
            height="28"
            viewBox="0 0 48 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="34" cy="14" r="14" fill="#8FDFDE" />
            <circle cx="14" cy="14" r="14" fill="#D1345B" fill-opacity="0.8" />
            <path
              d="M13.426 16.832H12.274V20H8.026V7.4H14.092C15.256 7.4 16.27 7.592 17.134 7.976C17.998 8.36 18.664 8.912 19.132 9.632C19.6 10.352 19.834 11.192 19.834 12.152C19.834 13.052 19.63 13.838 19.222 14.51C18.814 15.182 18.226 15.716 17.458 16.112L20.104 20H15.568L13.426 16.832ZM15.55 12.152C15.55 11.684 15.406 11.324 15.118 11.072C14.83 10.808 14.398 10.676 13.822 10.676H12.274V13.628H13.822C14.398 13.628 14.83 13.502 15.118 13.25C15.406 12.986 15.55 12.62 15.55 12.152ZM41.9401 7.4L37.9081 20H33.3541L31.3201 13.268L29.1781 20H24.6241L20.5921 7.4H24.9661L27.1621 14.564L29.4841 7.4H33.3901L35.5861 14.654L37.9081 7.4H41.9401Z"
              fill="#070707"
            />
          </svg>
        );
      case "Twitter":
        return (
          <SocialIcon
            width="37"
            height="30"
            viewBox="0 0 37 30"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M36.988 3.55469C35.625 4.15625 34.168 4.5625 32.6326 4.75C34.1993 3.8125 35.4056 2.32812 35.9696 0.5625C34.5048 1.42969 32.8833 2.0625 31.1521 2.39844C29.7656 0.921875 27.7916 0 25.614 0C21.4231 0 18.0313 3.39062 18.0313 7.57031C18.0313 8.16406 18.094 8.74219 18.2271 9.29688C11.9213 8.98438 6.32829 5.96875 2.59179 1.38281C1.94163 2.5 1.56563 3.80469 1.56563 5.1875C1.56563 7.8125 2.91296 10.1328 4.94963 11.4922C3.69629 11.4609 2.52129 11.1172 1.50296 10.5469V10.6406C1.50296 14.3125 4.11929 17.3672 7.58946 18.0625C6.95496 18.2344 6.28129 18.3281 5.59196 18.3281C5.10629 18.3281 4.62846 18.2812 4.16629 18.1875C5.12979 21.1953 7.93413 23.3828 11.2555 23.4453C8.66263 25.4766 5.38829 26.6875 1.83196 26.6875C1.22096 26.6875 0.617794 26.6484 0.0224609 26.5781C3.36729 28.75 7.35446 30 11.6315 30C25.5983 30 33.228 18.4609 33.228 8.45312C33.228 8.125 33.2201 7.79687 33.2045 7.47656C34.685 6.40625 35.9696 5.07812 36.988 3.55469Z" />
          </SocialIcon>
        );
      case "Linkedin":
        return (
          <SocialIcon
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.5365 5H8.43847C7.06764 5 5.86914 5.98438 5.86914 7.33594V32.4219C5.86914 33.7812 7.06764 34.9922 8.43847 34.9922H33.5286C34.9073 34.9922 35.9413 33.7734 35.9413 32.4219V7.33594C35.9491 5.98438 34.9073 5 33.5365 5ZM15.1908 30H10.8825V16.6406H15.1908V30ZM13.1855 14.6094H13.1541C11.7755 14.6094 10.8825 13.5859 10.8825 12.3047C10.8825 11 11.799 10 13.209 10C14.619 10 15.4806 10.9922 15.512 12.3047C15.512 13.5859 14.619 14.6094 13.1855 14.6094ZM30.9358 30H26.6275V22.6953C26.6275 20.9453 26.0008 19.75 24.442 19.75C23.2513 19.75 22.5463 20.5547 22.233 21.3359C22.1155 21.6172 22.0841 22 22.0841 22.3906V30H17.7758V16.6406H22.0841V18.5C22.7108 17.6094 23.69 16.3281 25.9695 16.3281C28.7973 16.3281 30.9358 18.1875 30.9358 22.1953V30Z"
              // fill="#070707"
            />
          </SocialIcon>
        );
      case "Github":
        return (
          <SocialIcon
            width="41"
            height="40"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0933 2.5C10.4035 2.5 2.54663 10.5391 2.54663 20.4453C2.54663 28.375 7.57563 35.0938 14.5473 37.4688C14.657 37.4922 14.751 37.5 14.845 37.5C15.4951 37.5 15.7458 37.0234 15.7458 36.6094C15.7458 36.1797 15.7301 35.0547 15.7223 33.5547C15.0643 33.7031 14.4768 33.7656 13.952 33.7656C10.5758 33.7656 9.80813 31.1484 9.80813 31.1484C9.00913 29.0781 7.85763 28.5234 7.85763 28.5234C6.33013 27.4531 7.8498 27.4219 7.9673 27.4219H7.97513C9.73763 27.5781 10.662 29.2812 10.662 29.2812C11.5393 30.8125 12.7143 31.2422 13.764 31.2422C14.5865 31.2422 15.3306 30.9766 15.7693 30.7734C15.926 29.6172 16.3803 28.8281 16.8816 28.375C12.9885 27.9219 8.89163 26.3828 8.89163 19.5078C8.89163 17.5469 9.57313 15.9453 10.6933 14.6953C10.5131 14.2422 9.90996 12.4141 10.8656 9.94531C10.8656 9.94531 10.991 9.90625 11.2573 9.90625C11.8918 9.90625 13.3253 10.1484 15.691 11.7891C17.0931 11.3906 18.5893 11.1953 20.0855 11.1875C21.5738 11.1953 23.0778 11.3906 24.48 11.7891C26.8456 10.1484 28.2791 9.90625 28.9136 9.90625C29.18 9.90625 29.3053 9.94531 29.3053 9.94531C30.261 12.4141 29.6578 14.2422 29.4776 14.6953C30.5978 15.9531 31.2793 17.5547 31.2793 19.5078C31.2793 26.3984 27.1746 27.9141 23.2658 28.3594C23.8925 28.9141 24.4565 30.0078 24.4565 31.6797C24.4565 34.0781 24.433 36.0156 24.433 36.6016C24.433 37.0234 24.6758 37.5 25.326 37.5C25.42 37.5 25.5296 37.4922 25.6393 37.4688C32.6188 35.0938 37.64 28.3672 37.64 20.4453C37.64 10.5391 29.7831 2.5 20.0933 2.5Z"
              // fill="#070707"
            />
          </SocialIcon>
        );
      default:
        return "This doesn't really need to be here";
    }
  }
}

const StyledIcon = styled.svg`
  height: 75px;
  width: 75px;
`;

export default Icon;
