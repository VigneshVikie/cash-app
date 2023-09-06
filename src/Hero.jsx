import React from "react";
import phone from "../src/assets/intro-phone.png";
import dollar from "./assets/dollar.svg";
import eye from "./assets/eye.svg";
import introCube from "./assets/intro-cube.png";
import introStairs from "./assets/intro-stairs.png";
import introCubeBottom from "./assets/intro-cubes-bottom.png";
import introPillar from "./assets/intro-pillar.png";


const Hero = () => {
  return (
    <div className="hero">
      <div className="dollar-eye">
        <img src={dollar} alt="" />
        <img src={eye} alt="" />
      </div>
      <svg
        className="background-line"
        xmlns="http://www.w3.org/2000/svg"
        width="1304"
        height="680"
        viewBox="0 0 1304 680"
        fill="none"
      >
        <path
          opacity="0.3"
          d="M580.086 292.435L546.41 199.908C546.045 198.869 545.392 197.095 544.451 194.589L545.332 194.233L547.286 199.591C555.853 223.428 561.277 238.479 563.557 244.743C565.134 249.078 572.862 270.292 580.88 292.145L580.086 292.435ZM596.976 287.898L595.191 275.19L596.007 275.075C596.593 279.207 597.2 283.471 597.808 287.756L596.976 287.898ZM620.099 286.508L620.592 279.464L621.424 279.508C621.265 281.84 621.101 284.198 620.942 286.557L620.099 286.508ZM688.195 318.383L693.301 314.005L694.078 314.902L689.01 319.281C688.742 318.969 688.468 318.673 688.195 318.383ZM708.226 350.127L713.086 348.37L751.818 334.337L752.311 335.497C734.912 341.791 719.073 347.538 708.691 351.254C708.527 350.871 708.379 350.482 708.226 350.099V350.127ZM712.725 409.235L746.334 417.062L831.407 436.885L830.958 438.051C781.564 426.557 728.312 414.15 724.897 413.274C723.299 412.864 718.641 411.753 712.473 410.302C712.56 409.93 712.643 409.575 712.725 409.219V409.235ZM706.551 427.844L708.921 428.938L708.527 429.973L706.102 428.829C706.25 428.473 706.392 428.15 706.551 427.811V427.844ZM694.636 447.94L699.283 451.454L698.577 452.324C697.236 451.301 695.682 450.135 693.963 448.811C694.193 448.497 694.417 448.196 694.636 447.908V447.94ZM666.762 473.029L676.22 488.129L675.475 488.578C672.646 484.046 669.165 478.496 666.012 473.478L666.762 473.029ZM649.861 481.238C656.976 500.772 664.376 520.983 664.376 520.983L685.113 577.772L684.194 578.122C672.618 546.471 659.499 510.552 658.75 508.302C657.94 505.878 653.063 492.524 649.041 481.539L649.861 481.238ZM625.939 486.925L626.563 491.342L625.704 491.446C625.49 489.951 625.277 488.468 625.074 487.018L625.939 486.925ZM589.166 484.325C587.622 490.931 586.166 497.187 584.875 502.725L583.747 502.49C584.552 499.206 586.188 492.261 588.126 484.041L589.166 484.325ZM551.019 464.945C536.789 483.756 525.049 499.277 525.049 499.277C525.049 499.277 481.314 557.062 451.749 596.15L450.802 595.4C484.921 550.275 534.539 484.632 537.276 481.222C538.726 479.388 543.942 472.536 550.225 464.256L551.019 464.945ZM536.827 450.803C519.697 465.624 505.839 477.621 505.839 477.621L460.177 517.152L459.373 516.2C490.783 488.999 519.264 464.354 521.503 462.504C523.183 461.114 528.973 456.134 536.138 449.916C536.378 450.239 536.608 450.524 536.844 450.803H536.827ZM519.368 419.541C491.209 429.672 444.388 446.638 444.388 446.638L350.044 480.653L349.721 479.722L350.268 479.52C362.615 475.065 479.289 432.791 482.568 431.609L518.99 418.397C519.127 418.78 519.253 419.169 519.385 419.541H519.368ZM514.661 398.782C494.482 401.518 462.52 405.962 444.869 408.409L444.733 407.314L472.596 403.445L514.53 397.594C514.585 397.977 514.634 398.371 514.678 398.782H514.661ZM516.473 364.581C497.022 360.005 464.238 352.36 441.224 346.996L441.454 345.901L462.799 350.871L516.752 363.399C516.67 363.793 516.582 364.187 516.478 364.581H516.473ZM523.889 343.356C493.24 328.924 431.192 299.851 431.192 299.851L318.448 246.878L318.815 245.964L324.446 248.618C338.605 255.252 472.081 317.765 475.825 319.527C477.237 320.189 498.412 330.09 524.436 342.273L523.889 343.356ZM533.538 327.337L523.347 319.598L524.026 318.624L534.266 326.363L533.538 327.337ZM361.313 602.274L361.548 602.553C333.411 626.914 283.776 669.872 274.461 677.933C261.611 689.038 150.147 785.369 141.571 792.774L72.742 852.26L72.1947 851.39C72.1947 851.39 131.468 800.376 138.478 794.317C143.152 790.278 153.418 781.372 169.275 767.598C225.542 718.644 256.079 692.088 260.888 687.933C265.398 684.03 279.277 672.094 289.731 663.063L289.589 662.904L360.738 601.059L361.581 602.033L361.313 602.274ZM472.289 221.385L472.026 221.084L473.001 220.241L505.204 257.282L504.23 258.13L503.568 257.37L503.453 257.474L481.145 231.707L472.251 221.417L472.289 221.385ZM783.54 237.311L771.111 248.082L730.227 283.618L729.379 282.644L783.015 236.036L783.863 237.01L783.54 237.311ZM366.299 366.256L366.37 365.238L450.687 371.258L450.611 372.352L433.475 371.127L366.299 366.256ZM236.172 356.951L235.548 356.913C175.629 352.808 142.804 350.517 137.072 350.039C128.468 349.311 63.2517 344.654 57.6474 344.249C53.9075 343.975 43.8006 343.194 27.3268 341.906L27.5786 340.554C79.9518 344.25 110.71 346.44 119.854 347.122L236.26 355.589L236.172 356.951ZM860.803 402.044C845.878 400.949 795.871 397.413 755.622 394.524L755.797 393.276L857.683 400.604L860.967 400.84L860.803 402.044ZM908.571 405.563L908.752 404.277C937.212 406.324 968.408 408.562 975.901 409.109L1123.36 419.869L1199.74 425.441C1199.62 426.125 1199.55 426.464 1199.55 426.464C1199.55 426.464 1133.87 421.539 1126.12 420.948L1091.88 418.534C1029.25 414.214 995.251 411.871 989.895 411.507C981.888 410.926 947.402 408.305 944.179 408.173C942.646 408.086 926.189 406.887 908.571 405.59V405.563ZM602.476 539.46C603.428 525.69 604.118 515.795 604.238 514.629C604.435 512.599 605.098 503.196 605.754 493.558H606.625C605.366 511.75 604.222 528.481 604.222 528.481C604.222 528.481 603.932 532.707 603.467 539.46H602.476ZM598.574 596.522V597.551H599.504C598.174 616.844 597.063 632.983 596.97 634.286C596.735 637.652 591.497 713.53 590.758 724.399C590.019 735.269 583.408 829.574 582.899 836.826C582.56 841.664 581.202 861.075 578.827 895.059L578.017 894.999C578.017 894.999 581.64 844.937 582.056 839.01C582.33 835.051 582.917 826.351 583.819 812.909C586.967 765.173 588.682 739.268 588.963 735.192C589.39 729.084 591.311 702.786 591.399 700.334C591.486 697.883 595.164 646.474 595.635 639.808C595.783 637.263 597.047 618.65 598.574 596.522ZM623.202 242.095L625.84 204.331L626.705 204.374C625.559 219.9 624.813 230.165 624.467 235.171C624.379 236.37 624.215 238.783 623.985 242.111L623.202 242.095ZM628.336 166.972C628.467 164.848 628.608 162.568 628.758 160.13C631.749 114.475 633.424 89.4573 633.782 85.0789C634.329 78.5113 637.717 28.7998 638.018 24.5254C638.215 21.6794 638.786 13.9715 639.731 1.40182L640.826 1.47296C638.133 41.3896 636.544 64.836 636.059 71.8123L629.398 167.043L628.336 166.972ZM915.314 121.984L916.102 122.892L909.08 128.962C879.161 154.659 860.263 170.907 852.385 177.704C848.784 180.813 835.917 191.934 819.678 206.022L819.011 205.25L908.44 128.004C909.768 126.844 912.06 124.837 915.314 121.984ZM951.321 90.5574C998.199 49.7724 1024.06 27.3239 1028.92 23.2119C1036.74 16.584 1095.44 -34.2549 1100.49 -38.6333C1103.86 -41.5523 1113 -49.397 1127.9 -62.1674L1128.65 -61.0235C1081.54 -20.1582 1053.87 3.8428 1045.63 10.9796L952.263 91.6629L951.321 90.5574ZM754.779 546.214L812.536 612.93C815.973 616.909 893.57 706.519 904.68 719.381L1019.52 852.277L1079 921.105L1078.13 921.653C1078.13 921.653 1027.11 862.418 1021.09 855.407C1017.05 850.733 1008.15 840.466 994.372 824.605C945.414 768.328 918.848 737.785 914.674 732.976C908.44 725.757 881.655 694.61 879.099 691.775C876.543 688.94 824.079 628.107 817.254 620.231C813.91 616.356 783.945 581.789 753.838 547.035L754.779 546.214ZM405.102 143.717L354.751 85.4292C351.624 81.817 342.319 71.1719 326.838 53.4941C280.004 -0.324005 254.372 -29.8382 249.942 -35.0485C243.331 -42.8695 192.475 -101.573 188.097 -106.625C185.178 -109.992 177.333 -119.129 164.563 -134.034L165.712 -134.778C206.596 -87.6589 230.6 -59.9854 237.726 -51.7577L355.725 84.7669C381.426 114.686 397.674 133.585 404.467 141.462L405.852 143.066L405.102 143.717ZM227.415 525.242C190.177 538.833 169.379 546.387 165.023 547.905C156.868 550.74 95.3948 573.01 90.1079 574.915C86.5832 576.184 77.0346 579.583 61.4621 585.111L61.1392 583.775C110.484 565.846 139.471 555.325 148.1 552.213L226.912 523.791L227.415 525.242ZM848.981 300.475L848.505 299.381C868.252 292.266 943.429 265.037 955.36 260.736L1094.43 210.559L1166.47 184.584L1166.72 185.596C1166.72 185.596 1104.73 207.779 1097.4 210.422C1092.5 212.184 1081.75 216.09 1065.15 222.14C1006.16 243.667 974.144 255.343 969.098 257.167C961.545 259.904 928.975 271.518 925.976 272.711C922.976 273.904 859.341 296.737 851.094 299.715L848.981 300.475ZM705.041 632.343C712.883 653.819 728.859 697.554 731.711 705.397C735.438 715.637 767.772 804.459 770.257 811.3L790.223 866.151L789.456 866.43C789.456 866.43 772.408 819.219 770.372 813.637C769.022 809.912 766.021 801.724 761.369 789.074C744.822 744.195 735.854 719.835 734.464 715.993C732.367 710.241 723.43 685.437 722.51 683.155C721.755 681.272 709.594 647.739 704.137 632.682L705.041 632.343ZM517.141 120.643C513.7 111.258 511.657 105.65 511.011 103.819C508.822 97.6012 491.718 50.8014 490.252 46.7787C489.277 44.0969 486.665 36.8214 482.414 24.9523L483.427 24.5855C497.204 62.1524 505.288 84.2196 507.678 90.7873L518.367 120.161L517.141 120.643ZM525.679 571.543L526.806 572.091L483.64 664.092C481.407 668.848 431.099 776.196 423.869 791.57C416.639 806.944 353.995 940.277 349.179 950.534L310.49 1032.87L309.625 1032.32C309.625 1032.32 343.011 961.611 346.962 953.227C349.589 947.637 355.347 935.324 364.235 916.289C395.749 848.675 412.858 811.986 415.561 806.221C419.617 797.59 437.18 760.45 438.718 756.964C440.256 753.478 474.5 680.779 478.933 671.355C481.32 666.27 504.438 616.893 525.679 571.543ZM697.236 206.131L698.216 206.679L677.489 250.928C677.112 251.727 673.817 258.776 668.831 269.432L667.813 268.885C681.764 239.155 697.159 206.268 697.159 206.268L697.236 206.131ZM717.579 162.823L779.375 31.3064C781.407 26.9828 787.351 14.1613 797.206 -7.15799C827.319 -71.8382 843.857 -107.256 846.819 -113.411C851.269 -122.65 884.211 -192.989 887.051 -199.031C888.945 -203.045 894.103 -213.925 902.524 -231.672L903.673 -230.923C877.267 -174.437 861.746 -141.258 857.109 -131.385C852.471 -121.511 826.89 -67.0657 780.366 31.9522C763.469 67.6035 752.813 90.1342 748.398 99.5441C745.568 105.564 732.603 133.231 718.51 163.316L717.579 162.823ZM225.313 203.296L217.761 199.804C153.081 169.696 117.663 153.158 111.507 150.191C102.269 145.742 31.9296 112.8 25.8874 109.965C21.8738 108.071 10.9935 102.912 -6.75372 94.487L-6.00939 93.3432C50.4978 119.734 83.6807 135.254 93.5395 139.902L225.822 202.059L225.313 203.296ZM912.266 525.614L896.306 518.083C891.419 515.784 845.56 494.324 801.722 473.784L802.165 472.618L889.044 513.349L912.742 524.464L912.266 525.614ZM1005.47 569.349L1005.93 568.166C1010.77 570.438 1014.44 572.156 1016.48 573.092L1175.45 647.782L1257.79 686.471C1257.41 687.051 1257.24 687.336 1257.24 687.336C1257.24 687.336 1186.53 653.951 1178.15 649.999C1172.56 647.372 1160.24 641.616 1141.21 632.732C1073.59 601.229 1036.91 584.126 1031.16 581.422C1026.95 579.479 1016.01 574.313 1005.48 569.349H1005.47ZM315.618 426.191L270.876 432.342C266.892 432.89 255.116 434.583 235.548 437.421C176.075 445.857 143.488 450.433 137.789 451.148C129.224 452.242 64.4503 461.229 58.9007 461.995C55.19 462.502 45.1415 463.841 28.7553 466.012L28.7224 464.633C80.7089 457.361 111.248 453.098 120.341 451.843L270.849 431.155C289.709 428.637 304.59 426.645 315.493 425.178L315.618 426.191ZM909.934 344.27C889.64 347.051 865.499 350.335 860.518 351.019C857.234 351.473 833.443 354.784 805.027 358.73L804.879 357.499L853.19 350.811L909.775 342.968L909.934 344.27ZM1005.9 330.971L1005.75 329.718L1117.07 314.393L1192.94 303.994C1192.94 304.684 1192.97 305.034 1192.97 305.034C1192.97 305.034 1127.72 313.84 1120 314.886C1114.85 315.597 1103.52 317.183 1086.01 319.642L1005.9 330.971ZM584.224 197.166L583.227 190.052C582.8 187.016 581.482 178.049 579.27 163.152C572.703 117.871 569.138 93.0604 568.576 88.7184C567.739 82.1837 560.728 32.8498 560.131 28.6082C559.73 25.7841 558.686 18.1219 557.001 5.62155L558.095 5.47375C563.758 45.0693 567.078 68.3315 568.056 75.2603C569.034 82.1891 574.405 120.413 584.169 189.931C584.508 192.394 584.833 194.766 585.143 197.046L584.224 197.166ZM633.749 549.016L634.734 548.896C638.959 578.735 646.392 631.199 646.725 633.585C647.196 636.924 657.874 712.227 659.39 723.026C660.906 733.824 674.063 827.429 675.076 834.626C675.751 839.424 678.458 858.693 683.198 892.432L682.393 892.542C682.393 892.542 675.53 842.819 674.704 836.936C674.153 833.013 672.917 824.382 670.998 811.043C664.153 763.694 660.446 738 659.877 733.961C659.023 727.902 655.438 701.774 655.012 699.36C654.585 696.947 647.497 645.894 646.572 639.277C645.959 634.921 638.746 584.312 633.749 549.016ZM373.025 700.176C357.919 720.136 344.406 737.989 340.373 743.309L234.262 883.281L179.302 955.766L178.568 955.033C178.568 955.033 225.943 892.81 231.536 885.427C235.269 880.505 243.46 869.659 256.11 852.89C300.989 793.299 325.344 760.972 329.175 755.908C334.938 748.311 359.824 715.637 362.073 712.517C362.84 711.423 369.052 703.213 377.135 692.574L372.1 699.503L373.025 700.176ZM708.757 254.858L729.379 227.613L772.227 171.098L773.141 171.586L709.676 255.525L708.757 254.858ZM801.448 132.546L846.151 73.5746C849.041 69.7654 857.521 58.4545 871.59 39.6418C914.495 -17.3652 938.029 -48.5724 942.192 -53.9797C948.464 -62.0907 995.281 -124.034 999.342 -129.36C1002.03 -132.906 1009.34 -142.477 1021.27 -158.071L1022.23 -157.102C984.648 -107.331 962.574 -78.1012 956.006 -69.4136L846.983 74.412C823.847 104.725 808.959 124.257 802.318 133.006L801.448 132.546ZM905.025 607.118L904.209 608.119C885.333 593.797 863.868 577.471 859.292 574.017C856.102 571.598 833.098 554.21 805.684 533.478L806.461 532.521L853.173 567.876C855.259 569.453 879.455 587.771 905.025 607.118ZM1012.16 688.266L1105.38 758.956L1177.87 813.916L1177.14 814.644C1177.14 814.644 1114.94 767.253 1107.57 761.676C1102.64 757.951 1091.8 749.761 1075.02 737.108L1011.41 689.197L1012.16 688.266ZM468.239 277.844L449.762 263.861L317.474 163.578L318.092 162.692C337.178 177.246 349.816 186.872 356.004 191.568C365.324 198.606 433.836 250.435 468.863 276.93L468.239 277.844ZM235.395 101.761C195.08 71.4073 172.67 54.4883 168.164 51.0038C160.053 44.7318 98.1094 -2.08447 92.7842 -6.14548C89.2377 -8.8382 79.6672 -16.1465 64.0727 -28.0704L65.0414 -29.0337C114.813 8.54779 144.041 30.6223 152.725 37.1899L236.26 100.529L235.395 101.761ZM288.182 587.738L287.438 586.539L319.696 566.519C347.98 549.115 365.841 538.105 373.277 533.489C379.56 529.587 415.72 507.071 446.615 487.822L447.195 488.753L320.188 567.564C316.77 569.688 306.699 576.026 289.977 586.578L288.16 587.716L288.182 587.738ZM177.468 656.698C160.212 667.42 141.313 679.187 138.61 680.861C135.432 682.835 126.797 688.146 112.706 696.793L112.115 695.551C141.739 677.063 163.235 663.654 176.604 655.324L177.468 656.698ZM896.744 209.36C895.048 210.422 893.86 211.172 893.417 211.473C890.729 213.263 833.213 248.826 825.781 253.451C820.423 256.773 752.924 298.844 713.666 323.249L713.059 322.154L819 256.248L896.131 208.26L896.744 209.36ZM937.409 184.152L936.774 183.002L1045.27 115.684L1110.33 75.2932L1110.78 76.2345C1110.78 76.2345 1054.76 110.819 1048.13 114.929C1043.71 117.669 1034.01 123.726 1019.01 133.099C975.676 160.224 948.475 177.241 937.409 184.152ZM734.967 581.882L734.135 582.38C726.117 569.595 715.713 553.001 706.223 537.873L707.071 537.364C716.277 552.043 727.152 569.398 734.967 581.882ZM765.824 631.139C777.449 649.698 790.277 670.184 793.348 675.093L853.069 770.679L884.003 820.177L883.313 820.61C883.313 820.61 856.818 777.98 853.671 772.94C851.57 769.572 846.931 762.189 839.754 750.79C814.238 710.315 800.401 688.35 798.241 684.895C795.001 679.707 781.094 657.3 779.725 655.264C779.058 654.268 772.2 643.295 764.948 631.675L765.824 631.139ZM544.714 279.557L507.607 220.181L508.411 219.715C521.379 240.651 529.601 253.904 533.078 259.471C534.512 261.77 539.246 269.323 545.409 279.174L544.714 279.557ZM465.514 153.519C457.983 141.551 453.604 134.564 452.378 132.557C448.958 126.931 422.485 84.7122 420.213 81.0836C418.703 78.6609 414.635 72.0933 408.009 61.3807L408.923 60.8334C430.213 94.6677 442.713 114.555 446.424 120.495L466.674 152.868L465.514 153.519ZM555.195 624.747C558.883 608.875 562.807 592.023 566.524 576.075L567.744 576.332L556.431 625.004L555.195 624.747ZM544.796 669.395L538.617 698.479L539.23 698.61C531.945 729.861 513.315 809.839 510.146 823.395C506.277 839.935 472.716 983.383 470.138 994.417C468.412 1001.77 461.504 1031.3 449.412 1083L448.449 1082.63C448.449 1082.63 466.417 1006.52 468.524 997.492C469.932 991.476 473.003 978.236 477.735 957.775C494.493 885.089 503.597 845.651 505.045 839.459C507.234 830.155 516.675 790.202 517.447 786.442C518.219 782.682 536.603 704.51 538.989 694.369C539.503 692.234 541.654 682.892 544.812 669.395H544.796ZM652.872 206.465L653.966 206.657C649.396 226.316 646.074 240.589 645.79 241.815C645.565 242.762 643.447 251.902 640.317 265.399L639.178 265.202C644.159 243.928 649.637 220.416 652.888 206.465H652.872ZM672.159 123.959L699.825 5.84045C700.919 1.18835 704.068 -12.5909 709.271 -35.4973C725.274 -105.019 734.086 -143.102 735.706 -149.747C738.141 -159.708 755.737 -235.356 757.259 -241.852C758.269 -246.187 761.051 -257.903 765.605 -277L766.88 -276.507C752.796 -215.75 744.516 -180.067 742.038 -169.461C739.561 -158.854 725.854 -100.28 700.919 6.26187C691.798 44.646 686.058 68.8988 683.701 79.0203C682.568 83.8694 678.387 101.821 673.198 124.134L672.159 123.959ZM341.227 323.626L226.84 296.863C222.188 295.768 208.409 292.62 185.503 287.417C115.981 271.414 77.8976 262.607 71.2533 260.998C61.2924 258.563 -14.3558 240.967 -20.8522 239.446C-25.1869 238.424 -36.9028 235.636 -56 231.083L-55.5074 229.802C5.25045 243.886 40.9327 252.167 51.5395 254.644L227.262 295.758C265.646 304.879 289.899 310.619 300.02 312.976L341.44 322.619L341.227 323.626ZM931.919 461.546L932.368 460.386C968.632 468.836 1032.42 483.701 1044.39 486.498L1215.41 526.511L1303.99 547.238L1303.62 548.201C1303.62 548.201 1227.51 530.233 1218.49 528.126C1212.47 526.721 1199.23 523.651 1178.77 518.915C1106.08 502.156 1066.65 493.055 1060.45 491.61C1051.15 489.42 1011.2 479.974 1007.44 479.202C1004.56 478.617 958.119 467.709 931.919 461.557V461.546Z"
          fill="white"
        />
      </svg>
      <div className="top-icons">
        <img className="intro-cube" src={introCube} alt="" />
        <img className="intro-stairs" src={introStairs} alt="" />
      </div>
      <div className="texts">
        <div className="cash-text">CASH</div>
        <div className="app-text">APP</div>
      </div>
      <div className="phone">
        <img src={phone} alt="" />
      </div>
      <div className="bottom-icons">
        <img className="intro-cube-bottom" src={introCubeBottom} alt="" />
        <img className="intro-pillar" src={introPillar} alt="" />
      </div>
      
    </div>
  );
};

export default Hero;
